import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:4000";

export const signIn = async (email: string, password: string) => {
  const res = await fetch(`${BASE_URL}/api/users/log_in`, {
    body: JSON.stringify({ email, password }),
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    credentials: "include"
  });
  return res.json();
};

export const useSignOut = () => {
  const router = useRouter();
  const client = useApolloClient();
  return async () => {
    await fetch(`${BASE_URL}/api/users/log_out`, {
      method: "delete",
      credentials: "include"
    });
    client.clearStore();
    router.push("/admin/login");
  };
};
