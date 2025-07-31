'use client';
import Image from 'next/image';
import React, { useLayoutEffect, useState } from 'react';
import dd from "@/assets/digdig.png";
import vs from "@/assets/vietstats.png";
export const projects = [
  {
    name: 'SA World',
    desc: [
      'A web-based ecosystem integrating multiple HTML5 mini-games where users can play, earn points, and redeem rewards through the platform’s store.',
      'Designed a gamification system with point accumulation, leaderboard competitions, and limited-time events.',
      'Developed a reward store where users can exchange points for products or prizes.',
      'Integrated a lottery feature allowing users to spend points for a chance to win exclusive rewards.',
      'Implemented event-based campaigns to boost engagement and user retention.',
    ],
    techs: 'Next.js, Redux-toolkit, Ant Design, SASS, Tailwind',
    role: 'Front-end Developer',
    link: 'https://saworld.io/',
    company: 'Onechain Technology Joint Stock Company',
  },
   {
    name: 'Vietstats',
    desc: [
      'A data platform providing comprehensive economic insights',
      "A web-based system delivering up-to-date data on Vietnam's national indicators, local indicators, and industry indicators.",
      'The platform also includes news articles, economic reports, interactive charts, and AI-powered data analysis.',
      'Supported admin tools for uploading and managing economic content and reports.'
    ],
    techs: 'Next.js, WebSocket, SASS, Redux-toolkit, Ant Design, Highcharts, ECharts',
    role: 'Front-end Developer',
    link: 'https://vietstats.vn/',
    company: 'Vietstats Co., Ltd',
    img: vs,
  },
  {
    name: 'Digdig',
    desc: [
      'Outsource Project for Japanese Client.',
      'A second-hand e-commerce system built for the Japanese market, allowing users to buy and sell pre-owned items such as clothing, shoes, and personal goods.',
      'Developed and maintained both web and mobile versions of the platform.',
      'Implemented features for product listing, search/filtering, user profiles, chat, and order management.',
      'Mobile app built using React Native for cross-platform support.',
    ],
    techs: 'Next.js, Shopify',
    role: 'Front-end Developer',
    link: 'https://digdig.app',
    company: 'freelance projects (team)',
    img: dd,
  },
];

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
        {projects.map((project, index) => (
          <li
            key={index}
            className="relative bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 tracking-tight">
                  {project?.name}
                </h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      Company:
                    </span>
                    <p className="mt-1 text-base"> {project?.company}</p>
                  </li>
                  <li>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      Description:
                    </span>
                    {project?.desc.map((item, index) => (
                      <p className="mt-1 text-base" key={index}>
                        {item}
                      </p>
                    ))}
                  </li>
                  <li>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      Technologies used:
                    </span>
                    <p className="mt-1 text-base">{project?.techs}</p>
                  </li>
                  <li>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      Role:
                    </span>
                    <p className="mt-1 text-base"> {project?.role}</p>
                  </li>
                  <li>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      Product link:&ensp;
                    </span>
                    <a
                      href={project?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 cursor-pointer inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline"
                    >
                      {project?.link}
                    </a>
                  </li>
                </ul>
              </div>
              {/* Iframe */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 dark:to-gray-900 opacity-20 rounded-2xl"></div>
                {project?.img ? (
                  <Image
                    src={project?.img}
                    alt={project?.name}
                    className=" w-full h-[500px] lg:h-[600px] rounded-xl border border-gray-300 dark:border-gray-600 shadow-md bg-white/80 dark:bg-gray-900/80"
                    loading="lazy"
                  />
                ) : (
                  <iframe
                    src={project?.link}
                    className=" w-full h-[500px] lg:h-[600px] rounded-xl border border-gray-300 dark:border-gray-600 shadow-md bg-white/80 dark:bg-gray-900/80"
                    allowFullScreen
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SessionProjects;
