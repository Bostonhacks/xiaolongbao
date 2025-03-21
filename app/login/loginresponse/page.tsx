import AuthContextUpdater from '@/app/components/AuthContextUpdater';
import LoginResponseDisplay from '../../components/LoginResponseDisplay';


const LoginResponsePage = async({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
    const params = await searchParams;
    const success = params.success === 'true';
    const message = params.message as string || '';
    let user = null;

    try {
        if (params.user) {
            user = JSON.parse(params.user as string);

        }
    } catch (error) {
        console.error('Failed to parse user data:', error);
    }

    return (
        <>
            <AuthContextUpdater user={user} />
            <LoginResponseDisplay success={success} message={message} user={user} />;
        </>
   
    )
}

export default LoginResponsePage;