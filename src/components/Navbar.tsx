// src/components/Navbar.tsx
import { useNavigate } from "react-router";
const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {

        navigate('/login');
    }
  return (
    <nav className="flex items-center justify-between bg-gray-600 px-6 py-3 text-white">
      <img
        className="h-10"
        src="https://baitussalam.org/images/logo-2.svg"
        alt="Logo"
      />
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-white text-gray-300">Docs</a>
        <a href="#" className="hover:text-white text-gray-300">Examples</a>
        <a href="#" className="hover:text-white text-gray-300">Blog</a>
        <button onClick={logout} className="border px-4 py-1 rounded hover:bg-white hover:text-black">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
