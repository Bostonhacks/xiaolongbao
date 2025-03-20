"use client"
import { useEffect } from "react";
import { useAuth } from "../providers";

const AuthContextUpdater = ({ user }: { user: any | null }) => {
    const { refreshUser } = useAuth();
  
    useEffect(() => {
      if (user) {
        refreshUser();
      }
    }, [user]);
  
    return null;
};

export default AuthContextUpdater;