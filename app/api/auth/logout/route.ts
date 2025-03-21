// import { NextResponse } from "next/server";

// using BFF pattern (backend for frontend)
export async function POST(): Promise<Response> {
    try {
        const backendUrl = process.env.API_URL || "https://api.bostonhacks.org";
    
        const response = await fetch(`${backendUrl}/auth/logout`, {
            method: "POST"
        });
    
        const responseData = await response.json();
        const res = Response.json(responseData);
        // Get the Set-Cookie header from the backend response
        const setCookieHeader = response.headers.get('set-cookie');
    
        if (setCookieHeader) {
            res.headers.set('Set-Cookie', setCookieHeader);
        }
    
        return res;

    } catch(error) {
        console.error("Error during Google login:", error);
        return Response.json(error);
    }
   
}