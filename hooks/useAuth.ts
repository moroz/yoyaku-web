import { useRouter } from "next/router";
import { useCurrentUser } from "../api/queries/users";

export const useAuth = () => {
  const router = useRouter();
  const { data, loading } = useCurrentUser();
  if (loading) return null;

  if (!data.currentUser) {
    router.push("/admin/login");
    return null;
  }

  return data.currentUser;
};

export const useNotSignedIn = () => {
  const router = useRouter();
  const { data, loading } = useCurrentUser();
  if (loading) return null;

  if (data.currentUser) {
    router.push("/admin/slots");
    return data.currentUser;
  }

  return null;
};
