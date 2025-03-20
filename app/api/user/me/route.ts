import { NextResponse } from "next/server";



export async function GET(request: Request) {
   
    try {
        const response = await fetch(`${process.env.API_URL}/user/me`, {
            headers: {
                cookie: request.headers.get('access_token') || ''
            }
        });

        if (!response.ok) {
            return new Response('Not authorized', { status: 401 });
        }

        const user = await response.json();

        return NextResponse.json(user);
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        return NextResponse.json(error);
    }
}