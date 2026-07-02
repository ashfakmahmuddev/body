import React from "react";
import Container from "../commonUi/Container";

export default function Banner() {
  return (
    <div className="w-full bg-[url('/banner.jpg')] bg-cover bg-center my-10">
      <div className="w-full bg-black/40 py-20 md:py-48">
        <Container>
          <div className="max-w-2xl text-white space-y-4 px-4 md:px-0">
            <span className="text-sm font-semibold tracking-widest uppercase text-red-500">
              Premium Lifestyle Store
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">
              Find Your Own Style <br />
              <span className="text-neutral-400">
                with Our Premium Collection
              </span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-xl">
              Explore the finest selection of trendy T-shirts, premium footwear,
              luxury watches, and everything you need to stand out.
            </p>
            <div className="pt-2">
              <button className="bg-white text-black font-semibold px-6 py-3 text-sm uppercase tracking-wider hover:bg-neutral-200 transition duration-300 rounded-sm">
                Explore Collection
              </button>
            </div>
          </div>
        </Container>
      </div>

    </div>
  );
}