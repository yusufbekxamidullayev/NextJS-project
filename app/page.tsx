import Image from 'next/image'
import Star1 from "./assets/yulduz1.png"
import Star2 from "./assets/yulduz2.png"
import Window from "./assets/ochki.png"
import TShirt from "./assets/image 7.png"
import Original from "./assets/Frame 10.png"
import ShopCart from './components/shop-cart/ShopCart'
import Futbolka from "./assets/Futbolka.png"
import Koynak from "./assets/koynak.png"
import Jeans from "./assets/Jeans.png"
import Tatirovka from "./assets/tatirovka.png"
import Kostyum from "./assets/kostyum.png"
import Qiz from "./assets/qiz.png"
import Gantel from "./assets/gantel.png"
import Koylak from "./assets/koylak.png"
import Futbolka2 from "./assets/futbolka2.png"
import Shorts from "./assets/shorts.png"
import Shim from "./assets/shim.png"
const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0F1] pt-10 sm:pt-15">
      {/* Hero SECTION */}
      <section className="bg-[#F2F0F1] relative overflow-hidden">
        {/* Background Image for large screens */}
        <div className="absolute top-0 right-0 w-full h-full hidden lg:block">
          <Image src={Window} alt="Hero" fill className="object-cover object-center" priority />
        </div>

        {/* Stars */}
        <div className="absolute top-24 right-[10%] w-20 h-20 hidden lg:block">
          <Image src={Star1} alt="star" width={76} height={76} />
        </div>

        <div className="absolute top-[380px] right-[48%] w-14 h-14 hidden lg:block">
          <Image src={Star2} alt="star" width={56} height={56} />
        </div>

        {/* Content */}
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px] items-center">
            {/* Text */}
            <div className="py-8 lg:py-0 text-center lg:text-left">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[64px] font-black leading-tight mb-4 sm:mb-6">
                FIND CLOTHES <br />
                THAT MATCHES <br />
                YOUR STYLE
              </h1>
              <p className="text-[14px] sm:text-[16px] text-[#00000099] mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              <button className="bg-black text-white px-10 sm:px-14 py-3 sm:py-4 rounded-full text-[14px] sm:text-[16px] font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mt-8">
                <div className="text-center sm:text-left">
                  <h3 className="text-[32px] sm:text-[40px] font-bold">200+</h3>
                  <p className="text-[14px] text-[#00000099]">International Brands</p>
                </div>
                <div className="h-[1px] sm:h-[52px] w-full sm:w-[1px] bg-[#0000001A]"></div>
                <div className="text-center sm:text-left">
                  <h3 className="text-[32px] sm:text-[40px] font-bold">2,000+</h3>
                  <p className="text-[14px] text-[#00000099]">High-Quality Products</p>
                </div>
                <div className="h-[1px] sm:h-[52px] w-full sm:w-[1px] bg-[#0000001A]"></div>
                <div className="text-center sm:text-left">
                  <h3 className="text-[32px] sm:text-[40px] font-bold">30,000+</h3>
                  <p className="text-[14px] text-[#00000099]">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Empty right section for image */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-black py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center sm:justify-between gap-6 text-white text-[24px] sm:text-[28px] font-bold">
            <div>VERSACE</div>
            <div>ZARA</div>
            <div>GUCCI</div>
            <div>PRADA</div>
            <div>Calvin Klein</div>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[36px] sm:text-[48px] font-black text-center mb-10">NEW ARRIVALS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ShopCart src={TShirt} desc="SKINNY FIT JEANS" star={Original} price="120" rating="4.5/5" />
            <ShopCart src={Jeans} desc="SKINNY FIT JEANS" star={Original} price="240" not="$260" rating="4.5/5" dis="-20%" />
            <ShopCart src={Koynak} desc="CHECKERED SHIRT" star={Original} price="180" rating="4.5/5" />
            <ShopCart src={Futbolka} desc="SLEEVE STRIPED T-SHIRT" star={Original} price="130" rating="4.5/5" not="$160" dis="-30%" />
          </div>

          <div className="flex justify-center mt-8">
            <button className="border border-[#0000001A] px-12 py-3 rounded-full text-[14px] sm:text-[16px] font-medium">
              View All
            </button>
          </div>
        </div>
      </section>

      {/* TOP SELLING */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#0000001A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[36px] sm:text-[48px] font-black text-center mb-10">TOP SELLING</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ShopCart src={Koylak} desc="VERTICAL STRIPED SHIRT" star={Original} price="212" not="$232" dis="-20%" rating="5.0/5" />
            <ShopCart src={Futbolka2} desc="COURAGE GRAPHIC T-SHIRT" star={Original} price="145" rating="4.5/5" />
            <ShopCart src={Koynak} desc="LOOSE FIT BERMUDA SHORTS" star={Original} price="80" rating="4.5/5" />
            <ShopCart src={Futbolka} desc="FADED SKINNY JEANS" star={Original} price="210" rating="4.5/5" />
          </div>

          <div className="flex justify-center mt-8">
            <button className="border border-[#0000001A] px-12 py-3 rounded-full text-[14px] sm:text-[16px] font-medium">
              View All
            </button>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="pt-12 sm:pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[36px] sm:text-[48px] font-black text-center mb-10">OUR HAPPY CUSTOMERS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            { /* same review cards */}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[48px] font-black text-center mb-16">BROWSE BY DRESS STYLE</h2>

          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-white rounded-[20px] h-[289px] relative overflow-hidden">
                <Image
                  src={Tatirovka}
                  alt="Casual style"
                  fill
                  className="object-cover"
                />
                <h3 className="absolute top-6 left-6 text-[36px] font-bold z-10">Casual</h3>
              </div>
              <div className="bg-white rounded-[20px] h-[289px] overflow-hidden col-span-2 relative">
                <Image
                  src={Kostyum}
                  alt="Casual style"
                  fill
                  className="object-cover"
                />
                <h3 className="absolute top-6 left-6 text-[36px] font-bold">Formal</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div className="bg-white rounded-[20px] h-[289px] col-span-2 relative overflow-hidden">
                <Image
                  src={Qiz}
                  alt="Casual style"
                  fill
                  className="object-cover"
                />
                <h3 className="absolute top-6 left-6 text-[36px] font-bold">Party</h3>
              </div>
              <div className="bg-white rounded-[20px] h-[289px] relative overflow-hidden">
                <Image
                  src={Gantel}
                  alt="Casual style"
                  fill
                  className="object-cover"
                />
                <h3 className="absolute top-6 left-6 text-[36px] font-bold">Gym</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[48px] font-black mb-14">OUR HAPPY CUSTOMERS</h2>

          <div className="grid grid-cols-3 gap-5">
            {/* Review 1 */}
            <div className="border border-[#0000001A] rounded-[20px] p-7">
              <div className="flex mb-3">⭐⭐⭐⭐⭐</div>
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-[20px] font-bold">Sarah M.</h4>
                <span className="text-[#01AB31]">✓</span>
              </div>
              <p className="text-[16px] text-[#00000099]">
                "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
              </p>
            </div>

            {/* Review 2 */}
            <div className="border border-[#0000001A] rounded-[20px] p-7">
              <div className="flex mb-3">⭐⭐⭐⭐⭐</div>
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-[20px] font-bold">Alex K.</h4>
                <span className="text-[#01AB31]">✓</span>
              </div>
              <p className="text-[16px] text-[#00000099]">
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable."
              </p>
            </div>

            {/* Review 3 */}
            <div className="border border-[#0000001A] rounded-[20px] p-7">
              <div className="flex mb-3">⭐⭐⭐⭐⭐</div>
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-[20px] font-bold">James L.</h4>
                <span className="text-[#01AB31]">✓</span>
              </div>
              <p className="text-[16px] text-[#00000099]">
                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is diverse and on-point with trends."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
