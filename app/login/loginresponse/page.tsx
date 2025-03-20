import LoginResponseDisplay from '../../components/LoginResponseDisplay';


const LoginResponsePage = async({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const success = searchParams.success === 'true';
    const message = searchParams.message as string || '';
    let user = null;

    try {
        if (searchParams.user) {
            user = JSON.parse(searchParams.user as string);

        }
    } catch (error) {
        console.error('Failed to parse user data:', error);
    }

    return <LoginResponseDisplay success={success} message={message} user={user} />;
}

export default LoginResponsePage;