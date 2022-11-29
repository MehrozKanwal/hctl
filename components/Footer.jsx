import React from "react";
import Image from "next/image";
import Logo from "../asset/logo.svg";

function Footer() {
  return (
    <div>
      <footer className="footer fixed bottom-0 p-10 bg-appColor text-white mb-0 flex justify-around font-normal text-base">
        <div className="w-3/12">
          <div>
            <Image className="w-48" src={Logo} alt="htcl-logo" />
          </div>
          <a className=" mt-10">Health Care Taalent Link is a Job-finding portal providing more than 28,000 job Offers</a>
          
        </div>
        <div>
          <span className="text-xl font-bold">For Emloyees</span>
          <a className="link link-hover hover:no-underline">Why HCTL</a>
          <a className="link link-hover hover:no-underline">Our Partners World wide</a>
          <a className="link link-hover hover:no-underline">Our Team</a>
          <a className="link link-hover hover:no-underline">Pricing Plans</a>
        </div>
        <div>
          <span className="text-xl font-bold">For Job Seekers</span>
          <a className="link link-hover hover:no-underline">Why HCTL</a>
          <a className="link link-hover hover:no-underline">Our Team</a>
          <a className="link link-hover hover:no-underline">About Us</a>
          <a className="link link-hover hover:no-underline">Companies</a>
        </div>
        <div>
          <span className="text-xl font-bold">Help & Support</span>
          <a className="link link-hover hover:no-underline">HCTL Reviews</a>
          <a className="link link-hover hover:no-underline">Find a Partner</a>
          <a className="link link-hover hover:no-underline">Meet the Team</a>
          <a className="link link-hover hover:no-underline">Select Your Plan</a>
        </div>
        <div>
          <span className="text-xl font-bold">Contacts</span>
          <a className="link link-hover hover:no-underline">Join Our Team </a>
          <a className="link link-hover hover:no-underline">Meet Us</a>
          <a className="link link-hover hover:no-underline">Our Partners</a>
          <a className="link link-hover hover:no-underline">Help & Support</a>
        </div>
        
      </footer>
    </div>
  );
}

export default Footer;
