export async function POST(request) {
  try {
    const { firstName, lastName, email, phoneNumber, birthdate, cognitoSub } = await request.json();

    if (!firstName || !lastName || !email || !phoneNumber || !birthdate || !cognitoSub) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const backendUrl = process.env.BACKEND_API_URL;
    
    const backendResponse = await fetch(`${backendUrl}/api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        birthdate: birthdate,
        cognito_sub: cognitoSub
      }),
    });

    //     // Read the raw text so you can see any JSON or HTML error
    // const raw = await backendResponse.text();
    // console.log("Status:", backendResponse.status);
    // console.log("Raw response:", raw);

    // let data;
    // try {
    // data = JSON.parse(raw);
    // } catch {
    // console.warn("Response was not JSON");
    // }

    // if (!backendResponse.ok) {
    // console.error("Create user failed:", data?.error || raw);
    // } else {
    // console.log("User created:", data);
    // }

    if (!backendResponse.ok) {
      const errorData = await backendResponse.text();
      throw new Error(errorData || 'Backend registration failed');
    }

    const userData = await backendResponse.text();

    return Response.json({
      success: true,
      user: userData,
      message: 'User created in backend successfully',
    });

  } catch (error) {
    console.error('Backend registration error:', error);
    
    return Response.json(
      { error: error.message || 'Failed to create user in backend' },
      { status: 500 }
    );
  }
}
