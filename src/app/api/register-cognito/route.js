import { CognitoIdentityProviderClient, SignUpCommand, AdminDeleteUserCommand } from '@aws-sdk/client-cognito-identity-provider';
import crypto from 'crypto';

const cognitoClient = new CognitoIdentityProviderClient({
  region: process.env.AWS_REGION || 'us-east-1',
});

function calculateSecretHash(username, clientId, clientSecret) {
  const message = username + clientId;
  const key = clientSecret;
  const hash = crypto.createHmac('sha256', key).update(message).digest('base64');
  return hash;
}

export async function POST(request) {
  try {
    const { firstName, lastName, email, birthdate, phoneNumber, password } = await request.json();

    if (!firstName || !lastName || !email || !birthdate || !phoneNumber) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const clientId = process.env.AWS_COGNITO_APP_CLIENT_ID;
    const clientSecret = process.env.AWS_COGNITO_USER_POOL_CLIENT_SECRET;

    let secretHash = calculateSecretHash(email, clientId, clientSecret);

    const commandParams = {
      ClientId: clientId,
      Username: email,
      Password: password,
      SecretHash: secretHash,
      UserAttributes: [
        { Name: 'email', Value: email },
        { Name: 'name', Value: firstName + ' ' + lastName },
        { Name: 'birthdate', Value: birthdate },
        { Name: 'phone_number', Value: phoneNumber },
        { Name: 'given_name', Value: firstName },
        { Name: 'family_name', Value: lastName },
      ],
    };

    const command = new SignUpCommand(commandParams);

    const response = await cognitoClient.send(command);

    return Response.json({
      success: true,
      userSub: response.UserSub,
      message: 'User created in Cognito successfully',
    });

  } catch (error) {
    console.error('Cognito registration error:', error);
    
    let errorMessage = 'Failed to create user in Cognito';
    
    if (error.name === 'UsernameExistsException') {
      errorMessage = 'An account with this email already exists';
    } else if (error.name === 'InvalidPasswordException') {
      errorMessage = 'Password does not meet requirements';
    } else if (error.name === 'InvalidParameterException') {
      errorMessage = 'Invalid registration parameters';
    }

    return Response.json(
      { error: errorMessage },
      { status: 400 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json(
        { error: 'Missing email' },
        { status: 400 }
      );
    }

    const userPoolId = process.env.AWS_COGNITO_USER_POOL_ID;
    if (!userPoolId) {
      return Response.json(
        { error: 'Missing AWS_COGNITO_USER_POOL_ID' },
        { status: 500 }
      );
    }

    const command = new AdminDeleteUserCommand({
      UserPoolId: userPoolId,
      Username: email,
    });

    await cognitoClient.send(command);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Cognito rollback error:', error);
    return Response.json(
      { error: 'Failed to rollback Cognito user' },
      { status: 500 }
    );
  }
}
