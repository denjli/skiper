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

      <div className="pt-40">
        <Products />
      </div>

      <Craft />

      <Marquee />
      
      {/* TODO: Make Bottom Center */}
      <Share />
    </div>
  );
};

export default Page;
