// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setError("Invalid email");
      return;
    }
    if (!password) {
      setError("Password cannot be empty");
      return;
    }
    setError("");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
        <img
          className="mx-auto h-10 w-auto"
          src="https://baitussalam.org/images/logo-2.svg"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold">Log in</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && <p className="text-red-500">{error}</p>}
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          <span>Don't have an account?</span>{" "}
          <a
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
