"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../providers";
import { User } from "@/types/User";

const ProfilePage = () => {

  const { user, refreshUser } = useAuth();

  // create a state to store user data
  const [userProfile, setUserProfile] = useState({} as User);

  console.log(user);

  useEffect(() => {
    const getUserInfo = async() => {
      const response = await fetch(`/api/user?id=${user?.id}`);
      const data = await response.json();
      console.log(data);
      setUserProfile(data);
    }

    getUserInfo();
  }, []);

  if (!user) {
    return <div>No User</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <div className="mb-4">
        <p><strong>Name:</strong> {`${userProfile?.firstName} ${userProfile?.lastName}` || 'Not provided'}</p>
        <p><strong>Email:</strong> {userProfile?.email}</p>
      </div>
      <button 
        onClick={refreshUser}
        className="px-3 py-2 bg-blue-500 text-white rounded"
      >
        Refresh Profile
      </button>
    </div>
  );


}

export default ProfilePage;