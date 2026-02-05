import Link from 'next/link'
import React from 'react'
import { TfiEmail } from 'react-icons/tfi'

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-45  pt-40 sm:pt-48 pb-8 mt-30 relative">
      {/* Newsletter Section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-white rounded-[20px] px-6 sm:px-8 lg:px-16 py-8 sm:py-10 lg:py-9 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold leading-tight text-center lg:text-left max-w-[550px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[350px]">
            <button className="flex items-center gap-3 bg-white text-black font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
              <p className='text-[18px] text-[#00000066]'><TfiEmail /></p>
              <p className='text-[16px] text-[#00000066]'>Enter your email address</p>
            </button>
            <button className="cursor-pointer bg-white text-black font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 pb-8 border-b border-gray-300">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-[28px] sm:text-[32px] font-extrabold mb-4 sm:mb-6">SHOP.CO</h3>
            <p className="text-gray-600 text-[14px] leading-[22px] mb-6 sm:mb-8 max-w-[248px]">
              We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-[35px] h-[35px] bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" className="w-[35px] h-[35px] bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link href="#" className="w-[35px] h-[35px] bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </Link>
              <Link href="#" className="w-[35px] h-[35px] bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h4 className="font-medium text-[16px] tracking-[3px] mb-5 sm:mb-6">COMPANY</h4>
            <ul className="space-y-4 text-[16px] text-[#00000099]">
              <li><Link href="#" className="hover:text-black transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Works</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Career</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="col-span-1">
            <h4 className="font-medium text-[16px] tracking-[3px] mb-5 sm:mb-6">HELP</h4>
            <ul className="space-y-4 text-[16px] text-[#00000099]">
              <li><Link href="#" className="hover:text-black transition-colors">Customer Support</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Delivery Details</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div className="col-span-1">
            <h4 className="font-medium text-[16px] tracking-[3px] mb-5 sm:mb-6">FAQ</h4>
            <ul className="space-y-4 text-[16px] text-[#00000099]">
              <li><Link href="#" className="hover:text-black transition-colors">Account</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Manage Deliveries</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Orders</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Payments</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h4 className="font-medium text-[16px] tracking-[3px] mb-5 sm:mb-6">RESOURCES</h4>
            <ul className="space-y-4 text-[16px] text-[#00000099]">
              <li><Link href="#" className="hover:text-black transition-colors">Free eBooks</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Development Tutorial</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">How to - Blog</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Youtube Playlist</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-[#00000099] text-center sm:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex items-center gap-3">
            <div className="w-[46px] h-[30px] bg-white rounded-[5px] flex items-center justify-center border border-gray-200">
              <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                <rect width="48" height="32" rx="4" fill="white" />
                <path d="M18.5 21.5h-3l1.9-11.5h3l-1.9 11.5zm10.7-11.2c-.6-.2-1.5-.5-2.7-.5-3 0-5.1 1.5-5.1 3.7 0 1.6 1.5 2.5 2.6 3 1.1.5 1.5.9 1.5 1.3 0 .7-.9 1-1.7 1-1.1 0-1.7-.2-2.7-.6l-.4-.2-.4 2.3c.7.3 2 .6 3.4.6 3.2 0 5.3-1.5 5.3-3.8 0-1.2-.8-2.2-2.5-3-1-.5-1.6-.9-1.6-1.4 0-.5.5-.9 1.7-.9.9 0 1.7.2 2.2.4l.3.1.4-2zm5.8-1.3h-2.3c-.7 0-1.3.2-1.6.9l-4.5 10.6h3.2s.5-1.4.6-1.7h3.9c.1.4.4 1.7.4 1.7h2.8l-2.5-11.5zm-3.8 7.5c.2-.6 1.2-3.2 1.2-3.2s.2-.6.4-1l.2 1s.6 2.7.7 3.2h-2.5zm-15.5-7.5l-3 7.9-.3-1.6c-.5-1.7-2.2-3.6-4.1-4.5l2.7 10.2h3.2l4.8-11.5-3.3-.5z" fill="#1434CB" />
                <path d="M9.5 10l-4.9.1s0 .2 0 .4c4 1 6.7 3.4 7.8 6.3l-1.1-5.5c-.2-.7-.7-1.1-1.4-1.2-.2-.1-.3-.1-.4-.1z" fill="#FFAC41" />
              </svg>
            </div>
            <div className="w-[46px] h-[30px] bg-white rounded-[5px] flex items-center justify-center border border-gray-200">
              <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                <rect width="48" height="32" rx="4" fill="white" />
                <circle cx="18" cy="16" r="6" fill="#EB001B" />
                <circle cx="30" cy="16" r="6" fill="#F79E1B" />
                <path d="M24 11c-1.3 1.3-2 3-2 5s.7 3.7 2 5c1.3-1.3 2-3 2-5s-.7-3.7-2-5z" fill="#FF5F00" />
              </svg>
            </div>
            <div className="w-[46px] h-[30px] bg-white rounded-[5px] flex items-center justify-center border border-gray-200">
              <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                <rect width="48" height="32" rx="4" fill="white" />
                <path d="M20.5 10h-8c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h8c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5zm-4 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#003087" />
                <path d="M35.5 10h-8c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h8c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5zm-4 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#0070BA" />
              </svg>
            </div>
            <div className="w-[46px] h-[30px] bg-white rounded-[5px] flex items-center justify-center border border-gray-200">
              <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                <rect width="48" height="32" rx="4" fill="black" />
                <path d="M24 10c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" fill="white" />
              </svg>
            </div>
            <div className="w-[46px] h-[30px] bg-white rounded-[5px] flex items-center justify-center border border-gray-200">
              <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                <rect width="48" height="32" rx="4" fill="white" />
                <path d="M24 12l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#4285F4" />
                <path d="M24 12l2 6h6l-5 4 2 6-5-4" fill="#34A853" />
                <path d="M24 12l-2 6h-6l5 4-2 6 5-4" fill="#FBBC04" />
                <path d="M24 28l-5-4-2 6 5-4 5 4-2-6" fill="#EA4335" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer