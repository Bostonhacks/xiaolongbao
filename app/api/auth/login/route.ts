// import { NextResponse } from "next/server";

// using BFF pattern (backend for frontend)
export async function POST(request: Request): Promise<Response> {
    // check the request body for auth type
    const body = await request.json();
    const { authType } = body;
    const { redirect_uri } = body;

    const backendUrl = process.env.API_URL || "https://api.bostonhacks.org";

    let response;

    if (authType === "EMAIL") {
        // not implemented yet
        // response.status(501).send("Not implemented");
    } else if (authType === "GOOGLE") {
        // call backend API to authenticate with Google

        try {
            response = await fetch(`${backendUrl}/auth/google/login?redirect_uri=${redirect_uri}`);
        } catch (error) {
            console.error("Error during Google login:", error);
            return Response.json(error,{
                status: 500
            });
        }
       
    }
    if (!response || !response.ok) {
        return Response.json({
            error: await response?.json(),
            status: response?.status
        });
    }

    const responseData = await response.json();

    const res = Response.json(responseData);

    // Get the Set-Cookie header from the backend response
    const setCookieHeader = response.headers.get('set-cookie');

    if (setCookieHeader) {
        res.headers.set('Set-Cookie', setCookieHeader);
    }

    return res;
}