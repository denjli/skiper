"use client";

import * as React from "react";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Japanese from "@/components/Japanese";
import Marquee from "@/components/Marquee";
import Craft from "@/components/Craft";
import Share from "@/components/Share";

const Page = () => {
  return (
    <div className="min-h-screen w-full">
      <Hero />

      <div className="w-full pt-10">
        <Japanese />
      </div>

      <div className="py-20 flex justify-center">
        <Products />
      </div>

      <div className="py-20 flex justify-center">
        <Craft />
      </div>

      <Marquee />

      <Share />
    </div>
  );
};

export default Page;
