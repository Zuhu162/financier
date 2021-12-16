import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    window.location = "/";
  });

  return null;
}
