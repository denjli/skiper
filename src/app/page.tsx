"use client";

import * as React from "react";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex justify-center align-center">
      <Hero />
      <div className="pt-40">
        <Products />
      </div>
    </div>
  );
};

export default Page;
