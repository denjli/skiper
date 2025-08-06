import WrapButton from "@/components/ui/wrap-button";
import * as React from "react";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex justify-center align-center bg-gray-900">
      <WrapButton href="https://skiper-ui.com" className="font-teachers">
        Welcome to Skiper
      </WrapButton>
    </div>
  );
};

export default Page;
