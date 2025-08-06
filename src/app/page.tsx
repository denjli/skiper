import * as React from "react";
import { Camera } from "lucide-react";
import WrapButton from "@/components/ui/wrap-button";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex justify-center align-center bg-gray-900">
      <WrapButton href="https://skiper-ui.com" className="font-teachers">
        <Camera className="animate-spin" />
        Welcome to Skiper
      </WrapButton>
    </div>
  );
};

export default Page;
