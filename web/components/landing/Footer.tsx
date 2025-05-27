import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#1e1d6b] px-3 sm:px-10 py-5 md:px-24 xl:px-44">
      <div className="flex justify-between">
        <div className="w-7/12 sm:w-9/12">
          <h1 className="sm:text-3xl font-semibold mb-2">Why choose us</h1>
          <p className="font-light text-xs sm:text-base">
            Our quiz app offers an interactive way to test knowledge with
            real-time scoring and AI-powered question generation, perfect for
            learning or fun!
          </p>
        </div>
        <div>
          <Image
            src={
              "https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/6812e941003a4e9388ff/view?project=6809910a000e66c57d35&mode=admin"
            }
            alt="footer image"
            width={226}
            height={144}
            className="max-w-[130px] sm:max-w-full"
          />
        </div>
      </div>
      <div className="flex justify-between font-light text-xs sm:text-base mt-5 w-7/12 sm:w-6/12">
        <p>About</p>
        <p>Features</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
