"use client";

import * as React from "react";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Japanese from "@/components/Japanese";

const Page = () => {
  return (
    <div className="min-h-screen w-full">
      <Hero />

      <div className="pt-40">
        {/* TODO: Fix Products not working */}
        {/* <Products /> */}
      </div>

      <div className="w-full pt-10">
        <Japanese />
      </div>
    </div>
  );
};

export default Page;
