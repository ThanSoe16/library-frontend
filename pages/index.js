import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/lib/zustandAuth";

const Index = () => {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(`${user?.role}`);
    } else {
      router.push("/auth/login");
    }
  }, []);

  return <div>loading...</div>;
};

export default Index;
