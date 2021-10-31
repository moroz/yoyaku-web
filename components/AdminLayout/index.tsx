import React from "react";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  useAuth();

  return <div className="layout">{children}</div>;
};

export default AdminLayout;
