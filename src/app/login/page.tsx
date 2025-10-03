// app/login/page.tsx
"use client";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  const handleLogin = () => {
    login({
      id: "1",
      name: "John Doe",
      email: "john@example.com",
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}
