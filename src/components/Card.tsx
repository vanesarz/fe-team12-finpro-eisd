"use client";

import { Star } from "lucide-react";
import Image from "next/image";

interface CardProps {
  name: string;
  image: string;
  location: string;
  rating: number; // 0–5
}

export default function Card({ name, image, location, rating }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow w-60">
      {/* gambar */}
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />

      {/* isi card */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>

        {/* rating */}
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
        </div>
      </div>
    </div>
  );
}