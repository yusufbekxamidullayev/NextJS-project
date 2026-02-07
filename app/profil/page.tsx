// app/profile/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "My Profile | SHOP.CO",
    description: "Manage your account settings and preferences"
};

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-neutral-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
                    <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
                    <span>›</span>
                    <span className="text-neutral-900">My Profile</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
                            <div className="flex flex-col items-center mb-6">
                                <div className="relative w-24 h-24 mb-4">
                                    <div className="w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                        JD
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl">John Doe</h3>
                                <p className="text-sm text-neutral-500">john.doe@email.com</p>
                            </div>

                            <nav className="space-y-2">
                                <button className="w-full text-left px-4 py-3 rounded-lg bg-neutral-900 text-white font-medium">
                                    Account Settings
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-neutral-100 transition-colors font-medium text-neutral-700">
                                    My Orders
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-neutral-100 transition-colors font-medium text-neutral-700">
                                    Wishlist
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-neutral-100 transition-colors font-medium text-neutral-700">
                                    Addresses
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-neutral-100 transition-colors font-medium text-neutral-700">
                                    Payment Methods
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-neutral-100 transition-colors font-medium text-red-600">
                                    Logout
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Personal Information */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold">Personal Information</h2>
                                <button className="text-sm font-medium text-neutral-900 hover:underline">
                                    Edit
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-600 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="John"
                                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-600 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Doe"
                                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-600 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue="john.doe@email.com"
                                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-600 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        defaultValue="+1 (555) 123-4567"
                                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-neutral-600 mb-2">
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        defaultValue="1990-01-15"
                                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button className="px-8 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold">Recent Orders</h2>
                                <Link href="/orders" className="text-sm font-medium text-neutral-900 hover:underline">
                                    View All
                                </Link>
                            </div>

                            <div className="space-y-4">
                                {/* Order 1 */}
                                <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <p className="font-medium text-sm text-neutral-500">Order #12345</p>
                                            <p className="text-xs text-neutral-400 mt-1">Placed on Jan 15, 2024</p>
                                        </div>
                                        <span className="px-4 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                                            Delivered
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="relative w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden">
                                            <div className="w-full h-full flex items-center justify-center text-neutral-400">
                                                📦
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium mb-1">T-SHIRT WITH TAPE DETAILS</h4>
                                            <p className="text-sm text-neutral-500">Size: Large • Color: Black</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-lg">$120</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex gap-3">
                                        <button className="flex-1 py-2 border-2 border-neutral-900 rounded-full font-medium hover:bg-neutral-50 transition-colors">
                                            View Details
                                        </button>
                                        <button className="flex-1 py-2 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors">
                                            Buy Again
                                        </button>
                                    </div>
                                </div>

                                {/* Order 2 */}
                                <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <p className="font-medium text-sm text-neutral-500">Order #12344</p>
                                            <p className="text-xs text-neutral-400 mt-1">Placed on Jan 10, 2024</p>
                                        </div>
                                        <span className="px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                                            In Transit
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="relative w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden">
                                            <div className="w-full h-full flex items-center justify-center text-neutral-400">
                                                📦
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium mb-1">SKINNY FIT JEANS</h4>
                                            <p className="text-sm text-neutral-500">Size: 32 • Color: Blue</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-lg">$240</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex gap-3">
                                        <button className="flex-1 py-2 border-2 border-neutral-900 rounded-full font-medium hover:bg-neutral-50 transition-colors">
                                            Track Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Saved Addresses */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold">Saved Addresses</h2>
                                <button className="text-sm font-medium text-neutral-900 hover:underline">
                                    + Add New
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Address 1 */}
                                <div className="border-2 border-neutral-900 rounded-xl p-6 bg-neutral-50">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">
                                            Default
                                        </span>
                                        <button className="text-neutral-600 hover:text-neutral-900">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <h4 className="font-bold mb-2">Home</h4>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        123 Main Street<br />
                                        Apartment 4B<br />
                                        New York, NY 10001<br />
                                        United States
                                    </p>
                                </div>

                                {/* Address 2 */}
                                <div className="border border-neutral-200 rounded-xl p-6 hover:border-neutral-900 transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="w-16"></div>
                                        <button className="text-neutral-600 hover:text-neutral-900">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <h4 className="font-bold mb-2">Office</h4>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        456 Business Ave<br />
                                        Suite 200<br />
                                        San Francisco, CA 94102<br />
                                        United States
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}