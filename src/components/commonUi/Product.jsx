import Image from "next/image";
import React from "react";

export default function Product({ image, colorImages = [], name, category, price, originalPrice, discount, tag }) {
  return (
    /* 
      নরমাল অবস্থায় বর্ডার transparent থাকবে, hover করলে border-gray-900 হবে।
      নিচের দিকে হোভারের কন্টেন্ট দেখানোর জন্য p-2 এবং নেতিবাচক margin (mb-[-50px] বা তার বেশি) ব্যবহার করা যেতে পারে 
      অথবা সিম্পল রিলেটিভ পজিশন দিয়ে হ্যান্ডেল করা যায়।
    */
    <div className="group cursor-pointer flex flex-col w-full bg-white border border-transparent hover:border-gray-900 p-2 transition-all duration-300 relative">
      {/* Product Image Wrapper */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5] mb-3">
        <Image
          src={image}
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
          <div key={index} className="w-15 h-15 relative bg-gray-100 border border-transparent hover:border-gray-900 transition-all">
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
        {/* Price Tag (Discounts fields active on hover state look or default) */}
        <div className="flex flex-col mb-1">
          <span className={`text-sm font-bold ${discount ? 'text-red-600' : 'text-gray-900'}`}>
            {price}
          </span>
          {/* Original Price & Discount: হোভার ছাড়া স্পেস ধরে রাখবে কিন্তু হোভার করলে স্পষ্ট হবে (Adidas Style) */}
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
        {/* Extra promo tag (যা হোভার করলে নিচে এডিশনাল দেখাবে) */}
        {tag && (
          <p className="text-xs text-gray-900 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tag}
          </p>
        )}
      </div>
    </div>
  );
}