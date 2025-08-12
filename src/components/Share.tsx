"use client";

import React, { JSX } from "react";
import { Facebook, Link, Linkedin, Twitter } from "lucide-react";

import ShareButton from "./ui/share-button";

export default function ShareButtonDemo(): JSX.Element {
  const shareLinks = [
    {
      icon: Twitter,
      onClick: () => window.open("https://twitter.com/share"),
      label: "Share on Twitter",
    },
    {
      icon: Facebook,
      onClick: () => window.open("https://facebook.com/share"),
      label: "Share on Facebook",
    },
    {
      icon: Linkedin,
      onClick: () => window.open("https://linkedin.com/share"),
      label: "Share on LinkedIn",
    },
    {
      icon: Link,
      onClick: () => navigator.clipboard.writeText(window.location.href),
      label: "Copy link",
    },
  ];

  return (
    <div className=" flex justify-center items-center pb-10">
      <ShareButton links={shareLinks} className=" text-lg font-medium">
        <Link size={15} />
        Share
      </ShareButton>
    </div>
  );
}
