'use client'
import React, { useLayoutEffect, useState } from 'react'

function SessionProjects() {
    const [innerWidth, setInnerWidth] = useState(0);

    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            const width = window.innerWidth;
            setInnerWidth(width);
        };

        setInnerWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <ul className="space-y-8">
                <li className="relative bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 tracking-tight">
                                E-commerce Website
                            </h3>
                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Description:</span> 
                                    <p className="mt-1 text-base">
                                        A modern online shopping platform supporting product search, cart management, secure checkout, and real-time order tracking.
                                    </p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Technologies used:</span>
                                    <p className="mt-1 text-base">React, Next.js, TailwindCSS, Node.js</p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Role:</span>
                                    <p className="mt-1 text-base">Fullstack Developer</p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Product link:&ensp;</span>
                                    <a 
                                        href="https://hola-ecommerce.vercel.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="mt-1 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline"
                                    >
                                        https://hola-ecommerce.vercel.app/
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Iframe */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 dark:to-gray-900 opacity-20 rounded-2xl"></div>
                            <iframe 
                                src="https://hola-ecommerce.vercel.app/" 
                                className=" w-full h-[500px] lg:h-[600px] rounded-xl border border-gray-300 dark:border-gray-600 shadow-md bg-white/80 dark:bg-gray-900/80" 
                                allowFullScreen 
                                loading="lazy"
                            />
                        </div>
                    </div>
                </li>
                 <li className="relative bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 tracking-tight">
                                E-commerce Website
                            </h3>
                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Description:</span> 
                                    <p className="mt-1 text-base">
                                        A modern online shopping platform supporting product search, cart management, secure checkout, and real-time order tracking.
                                    </p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Technologies used:</span>
                                    <p className="mt-1 text-base">React, Next.js, TailwindCSS, Node.js</p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Role:</span>
                                    <p className="mt-1 text-base">Fullstack Developer</p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Product link:&ensp;</span>
                                    <a 
                                        href="https://hola-ecommerce.vercel.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="mt-1 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline"
                                    >
                                        https://hola-ecommerce.vercel.app/
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Iframe */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 dark:to-gray-900 opacity-20 rounded-2xl"></div>
                            <iframe 
                                src="https://hola-ecommerce.vercel.app/" 
                                className=" w-full h-[500px] lg:h-[600px] rounded-xl border border-gray-300 dark:border-gray-600 shadow-md bg-white/80 dark:bg-gray-900/80" 
                                allowFullScreen 
                                loading="lazy"
                            />
                        </div>
                    </div>
                </li>
                 <li className="relative bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 tracking-tight">
                                E-commerce Website
                            </h3>
                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Description:</span> 
                                    <p className="mt-1 text-base">
                                        A modern online shopping platform supporting product search, cart management, secure checkout, and real-time order tracking.
                                    </p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Technologies used:</span>
                                    <p className="mt-1 text-base">React, Next.js, TailwindCSS, Node.js</p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Role:</span>
                                    <p className="mt-1 text-base">Fullstack Developer</p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Product link:</span>
                                    <a 
                                        href="https://hola-ecommerce.vercel.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="mt-1 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline"
                                    >
                                        https://hola-ecommerce.vercel.app/
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Iframe */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 dark:to-gray-900 opacity-20 rounded-2xl"></div>
                            <iframe 
                                src="https://hola-ecommerce.vercel.app/" 
                                className=" w-full h-[500px] lg:h-[600px] rounded-xl border border-gray-300 dark:border-gray-600 shadow-md bg-white/80 dark:bg-gray-900/80" 
                                allowFullScreen 
                                loading="lazy"
                            />
                        </div>
                    </div>
                </li>
                 <li className="relative bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 tracking-tight">
                                E-commerce Website
                            </h3>
                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Description:</span> 
                                    <p className="mt-1 text-base">
                                        A modern online shopping platform supporting product search, cart management, secure checkout, and real-time order tracking.
                                    </p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Technologies used:</span>
                                    <p className="mt-1 text-base">React, Next.js, TailwindCSS, Node.js</p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Role:</span>
                                    <p className="mt-1 text-base">Fullstack Developer</p>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">Product link:</span>
                                    <a 
                                        href="https://hola-ecommerce.vercel.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="mt-1 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline"
                                    >
                                        https://hola-ecommerce.vercel.app/
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Iframe */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 dark:to-gray-900 opacity-20 rounded-2xl"></div>
                            <iframe 
                                src="https://hola-ecommerce.vercel.app/" 
                                className=" w-full h-[500px] lg:h-[600px] rounded-xl border border-gray-300 dark:border-gray-600 shadow-md bg-white/80 dark:bg-gray-900/80" 
                                allowFullScreen 
                                loading="lazy"
                            />
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default SessionProjects