// // lib/auth.ts
// import { cookies } from 'next/headers';

// export type TruncatedUser = {
//     id: string;
//     email: string;
//     authenticated: boolean;
//     // Add any other user fields you need
// };

// // returns simplified user object or null if not authenticated
// export async function getMe(): Promise<TruncatedUser | null> {

//     console.log("---- youre calling me woooo ---");

//     const cookieStore = await cookies();
//     const accessToken = cookieStore.get("access_token");
    
//     if (!accessToken) {
//         return null; // No token, user is not logged in
//     }

//     try {
//         const backendUrl = process.env.API_URL || 'http://localhost:8000';
//         const response = await fetch(`${backendUrl}/user/me`, {
//             headers: {
//                 Cookie: `access_token=${accessToken.value}`,
//                 // Or however your API expects to receive the token
//             },
//             // Ensure this is a fresh request
//             cache: 'no-store',
//         });


//         if (!response.ok) {
//             return null; // Token invalid or other error
//         }

//         const user = await response.json();

//         return {
//             id: user.id,
//             email: user.email,
//             authenticated: !!user
//         }
//     } catch (error) {
//         console.error('Failed to fetch user:', error);
//         return null;
//     }
// }

