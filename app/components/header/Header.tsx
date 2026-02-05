import Link from 'next/link'
import { CgProfile } from 'react-icons/cg';
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
    <div>
      <header className="fixed  bg-white border-b border-gray-200 w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className="lg:hidden p-2 rounded-md hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center">
              <Link href="/" className="text-2xl sm:text-3xl font-black tracking-tight">SHOP.CO</Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-6 ml-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors">
                  <span>Shop</span>
                  <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Men&apos;s Clothing</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Women&apos;s Clothing</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Accessories</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sale</Link>
                </div>
              </div>
              <Link href="#" className="text-gray-700 hover:text-black transition-colors">On Sale</Link>
              <Link href="#" className="text-gray-700 hover:text-black transition-colors">New Arrivals</Link>
              <Link href="#" className="text-gray-700 hover:text-black transition-colors">Brands</Link>
            </nav>

            <div className="hidden md:flex items-center flex-1 max-w-lg ml-8">
              <div className="relative w-full">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" placeholder="Search for products..." className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all" />
              </div>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">

              <button className="text-[#000000] text-[19px] cursor-pointer  p-2 hover:bg-gray-100 rounded-full relative">
                <Link href="/cart"><FiShoppingCart /></Link>
              </button>

              <button className="text-[#000000] text-[19px] cursor-pointer p-2 hover:bg-gray-100 rounded-full">
                <CgProfile />
              </button>
            </div>
          </div>

          <div className="md:hidden pb-4">
            <div className="relative w-full">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search for products..." className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm" />
            </div>
          </div>
        </div>

        <div className="hidden sm:border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-3">
            <div>
              <button className="w-full text-left font-medium text-gray-900 py-2 flex items-center justify-between">
                Shop
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="pl-4 space-y-2 mt-2">
                <Link href="#" className="block text-gray-600 py-1 hover:text-black">Men&apos;s Clothing</Link>
                <Link href="#" className="block text-gray-600 py-1 hover:text-black">Women&apos;s Clothing</Link>
                <Link href="#" className="block text-gray-600 py-1 hover:text-black">Accessories</Link>
                <Link href="#" className="block text-gray-600 py-1 hover:text-black">Sale</Link>
              </div>
            </div>
            <Link href="#" className="block text-gray-700 py-2 hover:text-black font-medium">On Sale</Link>
            <Link href="#" className="block text-gray-700 py-2 hover:text-black font-medium">New Arrivals</Link>
            <Link href="#" className="block text-gray-700 py-2 hover:text-black font-medium">Brands</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header