

import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// GET /api/judging/judges

export async function GET() {
    try {
        // get access_token cookie
        const cookieStore = await cookies();
        const accessToken = cookieStore.get('access_token');

        // fetch judges from the database
        const response = await fetch(`${process.env.API_URL}/judges`, {
            headers: {
                "Cookie": `access_token=${accessToken?.value || ""}`
            }
        });

        if (!response.ok) {
            return new Response(JSON.stringify(await response.json()), { status: 401 });
        }

        const judges = await response.json();

        return Response.json(judges);


    } catch (err) {
        console.error('Failed to fetch judges:', err);
        return Response.json(err);
    }
}