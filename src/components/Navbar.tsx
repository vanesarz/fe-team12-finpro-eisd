"use client";
import Link from "next/link";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <nav className="w-5xl rounded-full justify-content-center bg-white shadow-md fixed top-2 left-1/2 transform -translate-x-1/2 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition">
            FAQ
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DisMap
        </Link>

        {/* Auth Button */}
        <div className="flex gap-3">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register">
            <Button variant="primary">Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}