import Image from "next/image"
import TShirt from "../assets/Jeans.png"
import { CiShoppingTag } from "react-icons/ci"
import Link from "next/link"
import { MdDelete } from "react-icons/md"

const CartPage = () => {
  return (
    <div className="pt-32 bg-gray-50 min-h-screen pb-8 sm:pt-30 md:pt-23">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>›</span>
            <span className="text-black font-medium">Cart</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items - Left Side */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">YOUR CART</h1>

            <div className="space-y-4 sm:space-y-6">
              {/* Cart Item 1 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-100 rounded-lg flex-shrink-0">
                  <Image className="w-full h-full object-cover rounded-lg" src={TShirt} alt="TShirt"/>
                </div>

                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-base sm:text-lg">Gradient Graphic T-shirt</h3>
                    <button className="text-xl sm:text-2xl cursor-pointer text-red-500 hover:text-red-700 transition-colors ml-2">
                      <MdDelete />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Size: <span className="text-black font-medium">Large</span></p>
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4">Color: <span className="text-black font-medium">White</span></p>

                  <div className="flex justify-between items-center">
                    <p className="text-xl sm:text-2xl font-bold">$145</p>

                    <div className="flex items-center gap-3 sm:gap-4 bg-gray-100 rounded-full px-3 sm:px-4 py-2">
                      <button className="text-gray-600 cursor-pointer hover:text-black transition-colors text-lg">−</button>
                      <span className="font-medium min-w-[20px] text-center">1</span>
                      <button className="text-gray-600 cursor-pointer hover:text-black transition-colors text-lg">+</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart Item 2 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-100 rounded-lg flex-shrink-0 p-1">
                  <Image className="w-full h-full object-cover rounded-lg" src={TShirt} alt="TShirt" />
                </div>

                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-base sm:text-lg">Checkered Shirt</h3>
                    <button className="text-xl sm:text-2xl cursor-pointer text-red-500 hover:text-red-700 transition-colors ml-2">
                      <MdDelete />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Size: <span className="text-black font-medium">Medium</span></p>
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4">Color: <span className="text-black font-medium">Red</span></p>

                  <div className="flex justify-between items-center">
                    <p className="text-xl sm:text-2xl font-bold">$180</p>

                    <div className="flex items-center gap-3 sm:gap-4 bg-gray-100 rounded-full px-3 sm:px-4 py-2">
                      <button className="text-gray-600 cursor-pointer hover:text-black transition-colors text-lg">−</button>
                      <span className="font-medium min-w-[20px] text-center">1</span>
                      <button className="text-gray-600 cursor-pointer hover:text-black transition-colors text-lg">+</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart Item 3 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-100 rounded-lg flex-shrink-0">
                  <Image className="w-full h-full object-cover rounded-lg" src={TShirt} alt="TShirt" />
                </div>

                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-base sm:text-lg">Skinny Fit Jeans</h3>
                    <button className="text-xl sm:text-2xl cursor-pointer text-red-500 hover:text-red-700 transition-colors ml-2">
                      <MdDelete />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Size: <span className="text-black font-medium">Large</span></p>
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4">Color: <span className="text-black font-medium">Blue</span></p>

                  <div className="flex justify-between items-center">
                    <p className="text-xl sm:text-2xl font-bold">$240</p>

                    <div className="flex items-center gap-3 sm:gap-4 bg-gray-100 rounded-full px-3 sm:px-4 py-2">
                      <button className="text-gray-600 cursor-pointer hover:text-black transition-colors text-lg">−</button>
                      <span className="font-medium min-w-[20px] text-center">1</span>
                      <button className="text-gray-600 cursor-pointer hover:text-black transition-colors text-lg">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary - Right Side */}
          <div className="lg:col-span-1 mt-18 ">
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:sticky lg:top-24 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Order Summary</h2>

              <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                <div className="flex justify-between text-sm sm:text-base text-gray-600">
                  <span>Subtotal</span>
                  <span className="text-black font-semibold">$565</span>
                </div>

                <div className="flex justify-between text-sm sm:text-base text-gray-600">
                  <span>Discount (-20%)</span>
                  <span className="text-red-500 font-semibold">-$113</span>
                </div>

                <div className="flex justify-between text-sm sm:text-base text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="text-black font-semibold">$15</span>
                </div>

                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <div className="flex justify-between text-lg sm:text-xl font-bold">
                    <span>Total</span>
                    <span>$467</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <div className="relative flex items-center border border-gray-300 rounded-full max-w-[1000px] w-full pl-2 py-3">
                    <CiShoppingTag className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Add promo code"
                      className="flex-1 text-sm focus:outline-none"
                    />
                  </div>
                  <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="cursor-pointer w-full bg-black text-white py-3.5 sm:py-4 rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl">
                Go to Checkout
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
