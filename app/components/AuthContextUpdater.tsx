"use client"
import { useEffect } from "react";
import { useAuth } from "../providers";
import { User } from "@/types/User";

const AuthContextUpdater = ({ user }: { user: User }) => {
    const { refreshUser } = useAuth();
  
    useEffect(() => {
      if (user) {
        refreshUser();
      }
    }, [user]);
  
    return null;
};

export default AuthContextUpdater;