"use client";
import Link from "next/link";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <nav className="w-5xl max-w-9/10 rounded-full justify-content-center overflow-hidden bg-white shadow-lg fixed top-2 left-1/2 transform -translate-x-1/2 z-50">
      <div className="max-w-9/10 mx-auto px-2 py-2 flex items-center justify-between">

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