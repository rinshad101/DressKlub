import { Facebook, FacebookIcon, Instagram, Youtube } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#EDEDED] p-10">    
      <div className="grid xl:grid-cols-4 grid-cols-1  gap-10 ">
        <div className="flex flex-col gap-5">
          <p className="text-[22px]">© 2021 DressKlub</p>
          <p>
            This is the space to introduce visitors to the business or brand.
            Briefly explain who's behind it, what it does and what makes it
            unique. Share its core values and what this site has to offer.
          </p>
          <div className="flex gap-4  mt-5">
            <Instagram />
            <Facebook />
            <Youtube />
          </div>

          <input
            className="py-2 px-3 mt-5 border-[1px] border-black w-[300px] rounded-sm"
            type="text"
            placeholder="Enter search term"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[34px]">Categories</p>
          <p className="font-bold">Women</p>
          <p>Tops</p>
          <p>Bottoms</p>
          <p className="font-bold">Men</p>
          <p>Tops</p>
          <p>Bottoms</p>
          <p>Accessories</p>
          <p>Sale</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[22px]">Contact</p>
          <p>500 Terry Francine Street San Francisco, CA 94158</p>
          <p>dressKlub@gmail.com</p>
          <p>Tel:1234567890</p>
          <p className="text-[22px]">Shop Policies</p>
          <p>Refund Policies</p>
          <p>Shipping Policies</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[22px]">Newsletter</p>
          <p>Subscribe to our newsletter and get 10% off your first order</p>
          <input
            className="py-2 px-3 mt-5 border-[1px] border-black w-[300px] rounded-sm"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-black w-[150px] text-white text-[16px] py-3 mt-4 rounded-[4px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="py-10 ">
          <p>
            Terms & Conditions Privacy Policy Accessibility Statement © 2035 by
            DressKlub.
          </p>
        </div>
    </div>
  );
}

export default Footer;
