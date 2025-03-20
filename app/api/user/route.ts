import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {

    // get access_token cookie
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token');
    const params = request.nextUrl.searchParams;
    // const email = params.get("email");
    const userId = params.get("id");


    try {
        const response = await fetch(`${process.env.API_URL}/user?id=${userId}`, {
            headers: {
                "Cookie": `access_token=${accessToken?.value || ""}`
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            return new Response(JSON.stringify(await response.json()), { status: 401 });
        }

        const user = await response.json();

        return NextResponse.json(user);
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        return NextResponse.json(error);
    }
}