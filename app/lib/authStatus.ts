import { cookies } from 'next/headers';

export async function getAuthStatus() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token');
    const isAuthenticated = !!accessToken?.value;

    return {
        isAuthenticated,
    };
}