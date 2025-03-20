"use client"
const LogoutButton = () => {

    const logout = async () => {
        const response = await fetch('/api/auth/logout', {
            method: 'POST'
        });

        if (response.ok) {
            window.location.href = '/';
        }
    }

    return (
        <button className="hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300" onClick={logout}>Logout</button>
    )
}

export default LogoutButton;