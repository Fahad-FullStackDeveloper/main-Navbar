// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6 list-none">
        <li>
          <Link href="/">
            <button className="text-white bg-blue-500 px-4 py-1 rounded hover:bg-blue-800">Home</button>
          </Link>
        </li>
        <br />
        <li>
          <Link href="/about">
            <button className="text-white bg-blue-500 px-4 py-1 rounded hover:bg-blue-800">About Us</button>
          </Link>
        </li>
        <br />
        <li>
          <Link href="/contact">
            <button className="text-white bg-blue-500 px-4 py-1 rounded hover:bg-blue-800">Contact Us</button>
          </Link>
        </li>
        <br />
        <li>
          <Link href="/services">
            <button className="text-white bg-blue-500 px-4 py-1 rounded hover:bg-blue-800">Services</button>
          </Link>
        </li>
        <br />
        <li>
          <Link href="/blogs">
            <button className="text-white bg-blue-500 px-4 py-1 rounded hover:bg-blue-800">Blog</button>
          </Link>
        </li>
        <hr />
      </ul>
    </nav>
  );
};

export default Navbar;
