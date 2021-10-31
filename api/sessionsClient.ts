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
