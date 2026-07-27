import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <nav className="bg-slate-900 text-white py-4">
  <div className="max-w-6xl mx-auto flex justify-center gap-8">
    <Link
      className="hover:text-yellow-400 transition"
      to="/"
    >
      Translator
    </Link>

    <Link
      className="hover:text-yellow-400 transition"
      to="/generator"
    >
      Random String
    </Link>
  </div>
</nav>
  );
};

export default Navbar;