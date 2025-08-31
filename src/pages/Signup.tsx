// src/pages/Signup.tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.name.length <= 2) {
      setError("Name must be at least 3 characters.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Invalid email.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side */}
      <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://baitussalam.org/images/logo-2.svg"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}

            <Input
              id="name"
              name="name"
              label="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
            <Input
              id="email"
              name="email"
              type="email"
              label="Email address"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
            />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Re-enter your password"
            />

            <Button type="submit">Sign up</Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden items-center justify-center bg-indigo-100 lg:flex lg:w-1/2">
        <div className="p-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            Why Join Us?
          </h3>
          <p className="mb-4 text-lg text-gray-700">
            Experience the best ecommerce app for all your needs.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Get exclusive discounts and offers on your favorite products.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Fast and secure checkout process tailored for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
