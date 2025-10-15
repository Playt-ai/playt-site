# Registration Setup Guide

## Environment Variables

Create a `.env.local` file in the `playt_site` directory with the following variables:

```bash
# AWS Cognito Configuration
AWS_REGION=us-east-1
COGNITO_USER_POOL_CLIENT_ID=your_cognito_user_pool_client_id
COGNITO_USER_POOL_CLIENT_SECRET=your_cognito_user_pool_client_secret

# Backend API Configuration
BACKEND_URL=http://localhost:8000

# Email Configuration (for existing waitlist)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Frontend App Environment Variables

Create a `.env.local` file in the `playt-frontend` directory with:

```bash
# AWS Cognito Configuration
NEXT_PUBLIC_AWS_REGION=us-east-1
NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID=your_cognito_user_pool_client_id
NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_SECRET=your_cognito_user_pool_client_secret
```

## AWS Cognito Setup

1. **User Pool Configuration**:
   - Enable "Allow users to sign themselves up"
   - Set username attributes to "Email"
   - Configure password policy as needed
   - Enable email verification

2. **App Client Configuration**:
   - Create an app client with client secret (for secure server-side operations)
   - Enable "USER_PASSWORD_AUTH" flow
   - Enable "ALLOW_USER_SRP_AUTH" flow  
   - Enable "ALLOW_REFRESH_TOKEN_AUTH" flow
   - Note: The secret hash is automatically calculated and included in API calls

3. **Email Verification**:
   - Configure email settings in Cognito
   - Set up SES if using custom domain
   - Test email delivery

## Installation

1. Install dependencies:
```bash
cd playt_site
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Registration Flow

1. **Frontend Form**: User fills out registration form
2. **Cognito Creation**: User created in Cognito User Pool
3. **Backend Creation**: User record created in Django database
4. **Email Verification**: User receives verification email from Cognito
5. **Account Activation**: User clicks verification link to activate account

## API Endpoints

- `POST /api/register-cognito` - Creates user in Cognito
- `POST /api/register-backend` - Creates user in Django backend
- `POST /api/users/` - Backend endpoint for user creation (Django)

## Error Handling

The registration process handles:
- Duplicate email addresses
- Invalid email formats
- Cognito service errors
- Backend database errors
- Network connectivity issues

## Testing

1. Test with valid email addresses
2. Verify email delivery works
3. Test error scenarios (duplicate emails, invalid data)
4. Confirm user creation in both Cognito and Django backend
