import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token');

    if (!accessToken?.value) {
      return NextResponse.json({ user: null, isAuthenticated: false });
    }
    
    // if (!accessToken) {
    //   return NextResponse.json({ user: null, isAuthenticated: false });
    // }
    
    // const backendUrl = process.env.API_URL || "http://localhost:8000";
    
    // // Call your backend to validate and get user data
    // const response = await fetch(`${backendUrl}/auth/status`, {
    //   headers: {
    //     "Cookie": `access_token=${accessToken.value}`,
    //   },
    // });
    
    // if (!response.ok) {
    //   return NextResponse.json({ user: null, isAuthenticated: false });
    // }
    
    // const userData = await response.json();
    
    return NextResponse.json({
    //   user: userData.user,
      isAuthenticated: true
    });
    
  } catch (error) {
    console.error('Error checking auth status:', error);
    return NextResponse.json({ 
      user: null, 
      isAuthenticated: false,
      error: 'Failed to check authentication status'
    });
  }
}