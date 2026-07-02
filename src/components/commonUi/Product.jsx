"use client"; // Next.js App Router ব্যবহার করলে এটি একদম উপরে দিতে হবে

import Image from "next/image";
import React, { useState } from "react";

export default function Product({ image, colorImages = [], name, category, price, originalPrice, discount, tag }) {
  // বড় ইমেজের ট্র্যাক রাখার জন্য useState ব্যবহার করা হয়েছে
  const [currentImage, setCurrentImage] = useState(image);

  return (
    <div 
      className="group cursor-pointer flex flex-col w-full bg-white border border-transparent hover:border-gray-900 p-2 transition-all duration-300 relative"
      // মাউস পুরো প্রোডাক্ট কার্ড থেকে সরিয়ে নিলে আবার আগের মেইন ইমেজটি ফিরে আসবে (ঐচ্ছিক)
      onMouseLeave={() => setCurrentImage(image)} 
    >
      {/* Product Image Wrapper */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5] mb-3">
        <Image
          src={currentImage} // 👈 এখানে সরাসরি 'image' না দিয়ে স্টেট 'currentImage' ব্যবহার করা হয়েছে
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Top Right Wishlist Heart Icon */}
        <button className="absolute top-2 right-2 text-gray-400 hover:text-black transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>

      {/* Color Thumbnails: যা শুধু HOVER করলেই দেখা যাবে */}
      <div className="h-0 opacity-0 pointer-events-none group-hover:h-15 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex items-center gap-1 overflow-x-auto mb-2 scrollbar-none">
        {Array.isArray(colorImages) && colorImages.map((imgUrl, index) => (
          <div 
            key={index} 
            // 👈 onMouseEnter দিয়ে ছোট ইমেজে হোভার করলে মেইন ইমেজ স্টেট পরিবর্তন করা হচ্ছে
            onMouseEnter={() => setCurrentImage(imgUrl)}
            className={`w-15 h-15 relative bg-gray-100 border transition-all ${
              currentImage === imgUrl ? "border-gray-900" : "border-transparent"
            } hover:border-gray-900`}
          >
            <Image 
              src={imgUrl} 
              alt="color variant" 
              fill 
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Product Info Section */}
      <div className="flex flex-col grow text-left">
        {/* Price Tag */}
        <div className="flex flex-col mb-1">
          <span className={`text-sm font-bold ${discount ? 'text-red-600' : 'text-gray-900'}`}>
            {price}
          </span>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            {originalPrice && <span className="line-through">{originalPrice}</span>}
            {discount && <span className="text-red-500">{discount}</span>}
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 uppercase tracking-tight leading-tight mb-0.5">
          {name}
        </h3>

        {/* Category */}
        <p className="text-xs text-gray-400 font-normal mb-1">{category}</p>

        {/* Total Colors count text */}
        {colorImages.length > 0 && (
          <p className="text-xs text-gray-400 font-normal">{colorImages.length} colours</p>
        )}

        {/* Extra promo tag */}
        {tag && (
          <p className="text-xs text-gray-900 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tag}
          </p>
        )}
      </div>
    </div>
  );
}