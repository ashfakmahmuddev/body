import React from "react";
import Container from "../commonUi/Container";

export default function Category() {

    const categories = [
  {
    id: 1,
    title: "RUNNING SHOES",
    subtitle: "STARTING INR 2199",
    btnText: "Shop Now",
    bgImage: "/shoes.jpg",
  },
  {
    id: 2,
    title: "LUXURY WATCHES",
    subtitle: "UP TO 40% OFF",         // ঘড়ির জন্য আকর্ষণীয় সাবটাইটেল
    btnText: "Discover More",          // প্রিমিয়াম ওয়াচের সাথে ম্যাচিং বাটন
    bgImage: "/watch.jpg",
  },
  {
    id: 3,
    title: "TOPS & T-SHIRTS",
    subtitle: "STARTING INR 799",
    btnText: "Style-Up",
    bgImage: "/tShirt.jpg",
  },
  {
    id: 4,
    title: "WATER BOTTLES",
    subtitle: "FLAT 20% OFF",          // বোতলের অফারের সাথে মানানসই
    btnText: "Grab Now",
    bgImage: "/waterBottle.jpg",
  },
];

  return (
    <div className="py-10">
      <Container>
        {/* ৪ কলামের গ্রিড লেআউট (মোবাইলে ১ কলাম, ট্যাবলেটে ২ কলাম, ডেক্সটপে ৪ কলাম) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.bgImage})` }}
              className="relative aspect-square w-full bg-cover bg-center flex flex-col justify-between p-6 group overflow-hidden cursor-pointer"
            >
              {/* ইমেজের ওপর ডার্ক ওভারলে (image_fb2352.jpg এর মতো একই রকম করার জন্য) */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

              {/* মাঝখানের টেক্সট সেকশন */}
              <div className="relative z-10 my-auto text-center text-white space-y-1">
                <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm tracking-wider opacity-90 font-medium">
                  {item.subtitle}
                </p>
              </div>

              {/* নিচের বাম পাশের ছোট সাদা বাটন */}
              <div className="relative z-10 self-start">
                <button className="bg-white text-black font-bold text-[10px] md:text-xs uppercase px-3 py-1.5 shadow-md hover:bg-neutral-200 transition-colors duration-200 cursor-pointer">
                  {item.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
