import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="bg-black py-10 px-6">
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        {/* Address Section */}
        <div className="my-auto">
          <p className="text-white">400 University Drive Suite 200 Coral</p>
          <p className="text-white">Gables, FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">Links</h3>
          <ul className="space-y-8 text-lg">
            <li>
              <Link href="/">
                <p className="font-medium text-white hover:underline">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <p className="font-medium text-white hover:underline">Shop</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="font-medium text-white hover:underline">About</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="font-medium text-white hover:underline">Contact</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">Help</h3>
          <ul className="space-y-8 text-lg">
            <li>
              <Link href="/payment-options">
                <p className="font-medium text-white hover:underline">Payment Options</p>
              </Link>
            </li>
            <li>
              <Link href="/returns">
                <p className="font-medium text-white hover:underline">Returns</p>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policies">
                <p className="font-medium text-white hover:underline">Privacy Policies</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">Newsletter</h3>
          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="font-medium flex-1 px-4 py-2 bg-black border-b-2 border-white text-white focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-2 font-medium text-black bg-white hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="my-6 border-gray-600" />
      <p className="text-center text-white">E-commerce website. All Rights Reserved.</p>
      <p className="text-center text-white">Designed and developed by Hammad.</p>
    </div>
  );
}

export default Footer;
