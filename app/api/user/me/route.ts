import { cookies } from "next/headers";
// import { NextResponse } from "next/server";



export async function GET() {

    // get access_token cookie
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token');
   
    try {
        const response = await fetch(`${process.env.API_URL}/user/me`, {
            headers: {
                "Cookie": `access_token=${accessToken?.value || ""}`
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            return Response.json(await response.json(), { status: 401 });
        }

        const user = await response.json();

        return Response.json(user);
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        return Response.json(error);
    }
}