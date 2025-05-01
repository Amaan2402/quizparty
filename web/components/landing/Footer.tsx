import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#1e1d6b] px-56 h-[10.3rem] py-5 flex justify-between">
      <div className="w-9/12">
        <h1 className="text-3xl font-semibold mb-2">Why choose us</h1>
        <p className="font-light">
          Our quiz app offers an interactive way to test knowledge with
          real-time scoring and AI-powered question generation, perfect for
          learning or fun!
        </p>
        <div className="flex justify-between mt-5 w-6/12">
          <p>About</p>
          <p>Features</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div>
        <Image
          src={
            "https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/6812e941003a4e9388ff/view?project=6809910a000e66c57d35&mode=admin"
          }
          alt="footer image"
          width={226}
          height={144}
        />
      </div>
    </div>
  );
}

export default Footer;
