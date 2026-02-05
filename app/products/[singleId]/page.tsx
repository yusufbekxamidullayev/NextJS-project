import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: "Kiyimlarning to'liq ma'lumoti | HomePage",
  description: "Bizning saytimizdan o'zingizga kerakli barcha kiyimlarni topsangiz bo'ladi"
}

const SinglePage = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}


      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6 pt-20">
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <a href="#" className="hover:text-neutral-900 transition-colors">Home</a>
          <span>›</span>
          <a href="#" className="hover:text-neutral-900 transition-colors">Shop</a>
          <span>›</span>
          <a href="#" className="hover:text-neutral-900 transition-colors">Men</a>
          <span>›</span>
          <span className="text-neutral-900">T-shirts</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-neutral-100 rounded-2xl overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              <button className="aspect-square rounded-xl overflow-hidden border-2 border-neutral-900 shadow-lg">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200" alt="View 1" className="w-full h-full object-cover" />
              </button>
              <button className="aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-neutral-300 transition-all">
                <img src="https://www.mytheresa.com/media/1094/1238/100/6f/P01077565.jpg" alt="View 2" className="w-full h-full object-cover" />
              </button>
              <button className="aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-neutral-300 transition-all">
                <img src="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=200" alt="View 3" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-3 tracking-tight">ONE LIFE GRAPHIC T-SHIRT</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">4.5/5</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl font-bold">$260</span>
                <span className="text-2xl text-neutral-400 line-through">$300</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">-40%</span>
              </div>

              <p className="text-neutral-600 leading-relaxed">
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <p className="text-sm font-medium mb-4 text-neutral-600">Select Colors</p>
              <div className="flex gap-3">
                <button className="cursor-pointer w-10 h-10 rounded-full ring-2 ring-offset-2 ring-neutral-900" style={{ backgroundColor: '#556B2F' }} />
                <button className="cursor-pointer w-10 h-10 rounded-full hover:scale-105 transition-transform" style={{ backgroundColor: '#36454F' }} />
                <button className="cursor-pointer w-10 h-10 rounded-full hover:scale-105 transition-transform" style={{ backgroundColor: '#1B263B' }} />
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <p className="text-sm font-medium mb-4 text-neutral-600">Choose Size</p>
              <div className="flex gap-3">
                <button className="cursor-pointer px-6 py-3 rounded-full font-medium bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-colors">
                  Small
                </button>
                <button className="cursor-pointer px-6 py-3 rounded-full font-medium bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-colors">
                  Medium
                </button>
                <button className="cursor-pointer px-6 py-3 rounded-full font-medium bg-neutral-900 text-white shadow-lg">
                  Large
                </button>
                <button className="cursor-pointer px-6 py-3 rounded-full font-medium bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-colors hidden sm:block">
                  X-Large
                </button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center bg-neutral-100 rounded-full px-6 py-3">
                <button className="cursor-pointer text-xl font-semibold hover:text-neutral-600 transition-colors px-2">−</button>
                <span className="mx-6 font-medium text-lg">1</span>
                <button className="cursor-pointer text-xl font-semibold hover:text-neutral-600 transition-colors px-2">+</button>
              </div>

              <button className="cursor-pointer flex-1 bg-neutral-900 text-white py-4 rounded-full font-semibold hover:bg-neutral-800 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-neutral-200">
            <div className="flex gap-12">
              <button className="pb-4 font-medium text-neutral-500 hover:text-neutral-700 transition-colors">
                Product Details
              </button>
              <button className="pb-4 font-medium text-neutral-900 relative">
                Rating & Reviews
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900" />
              </button>
              <button className="pb-4 font-medium text-neutral-500 hover:text-neutral-700 transition-colors">
                FAQs
              </button>
            </div>
          </div>

          {/* Reviews Content */}
          <div className="py-8">
            <div className="flex items-center justify-between mb-8 hidden sm:block">
              <h2 className="text-2xl font-bold">
                All Reviews <span className="text-neutral-400 text-lg">(451)</span>
              </h2>
              <div className="flex gap-3">
                <select className="px-4 py-2 border border-neutral-200 rounded-full text-sm font-medium bg-white hover:border-neutral-300 transition-colors cursor-pointer">
                  <option>Latest</option>
                  <option>Highest Rated</option>
                  <option>Lowest Rated</option>
                </select>
                <button className="bg-neutral-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-colors">
                  Write a Review
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Review 1 */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-neutral-300" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <h4 className="font-semibold">Samantha D.</h4>
                  <svg className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-1.293 13.707l-3.414-3.414 1.414-1.414L9 11.172l5.293-5.293 1.414 1.414-6.707 6.707-.293.293-.707-.707z" />
                  </svg>
                </div>

                <p className="text-neutral-600 mb-3 leading-relaxed">
                  I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite shirt!
                </p>
                <p className="text-sm text-neutral-400">Posted on August 14, 2023</p>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-5 h-5 text-neutral-300" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <h4 className="font-semibold">Alex M.</h4>
                  <svg className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-1.293 13.707l-3.414-3.414 1.414-1.414L9 11.172l5.293-5.293 1.414 1.414-6.707 6.707-.293.293-.707-.707z" />
                  </svg>
                </div>

                <p className="text-neutral-600 mb-3 leading-relaxed">
                  The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.
                </p>
                <p className="text-sm text-neutral-400">Posted on August 15, 2023</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="border-2 border-neutral-200 px-12 py-3 rounded-full font-semibold hover:bg-neutral-50 transition-colors">
                Load More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage