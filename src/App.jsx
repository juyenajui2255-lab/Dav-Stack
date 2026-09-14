import logo from "./assets/logo-text.png";

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-20 py-4 border-b border-gray-400">

        {/* logo */}
        <img src={logo} alt="Dav Stack" className="w-42" />
        {/* Menu */}
        <div className="flex gap-6">
          <a href="#" className="text-gray-600 hover:text-pink-400">Home</a>
          <a href="#" className="text-gray-600 hover:text-pink-400">Technologies</a>
          <a href="#" className="text-gray-600 hover:text-pink-400">Projects</a>
          <a href="#" className="text-gray-600 hover:text-pink-400">About</a>
          <a href="#" className="text-gray-600 hover:text-pink-400">Contact</a>
        </div>
        {/* Button */}
        <div className="flex gap-3">
          <button className="rounded-4xl px-5 py-2 text-black hover:bg-pink-200">
            Sign In
          </button>
          <button className="rounded-4xl px-5 py-2 text-white bg-gray-800 hover:bg-black">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min">

      </section>
    </div>
  );
}
export default App;