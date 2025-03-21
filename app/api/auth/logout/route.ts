import { NextResponse } from "next/server";

// using BFF pattern (backend for frontend)
export async function POST(): Promise<NextResponse> {
    try {
        const backendUrl = process.env.API_URL || "http://localhost:8000";
    
        const response = await fetch(`${backendUrl}/auth/logout`, {
            method: "POST"
        });
    
        const responseData = await response.json();
        const nextResponse = NextResponse.json(responseData);
        // Get the Set-Cookie header from the backend response
        const setCookieHeader = response.headers.get('set-cookie');
    
        if (setCookieHeader) {
            nextResponse.headers.set('Set-Cookie', setCookieHeader);
        }
    
        return nextResponse;

    } catch(error) {
        console.error("Error during Google login:", error);
        return NextResponse.json(error);
    }
   
}