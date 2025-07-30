'use client';
import React, { useState } from 'react';

function ExperienceSection() {
  const [expanded, setExpanded] = useState(null);

  const toggleProject = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  const experiences = [
    {
      company: 'Vietstats Co., Ltd',
      logo: 'VS',
      period: 'Apr 2024 – Present',
      role: 'Front-end Developer',
      desc: [
        'Working with NextJS, ReactJS, Redux, WebSocket, and RESTful APIs.',
        'Developed a website providing economic data, charts, economic reports, and news.',
        'Built an admin system for uploading and managing economic data, reports, and news.',
        'Contributing ideas and suggestions for product improvement.',
      ],
      technologies: [
        'TypeScript',
        'Next.js 14',
        'React.js',
        'WebSocket',
        'Redux-toolkit',
        'Ant Design',
        'Shadcn',
      ],
    },
    {
      company: 'NCC ASIA',
      logo: 'NCC',
      period: 'June 2022 – Sep 2024',
      role: 'Front-end Developer',
      desc: [
        'Working with NextJS, ReactJS, Vue.js, Nuxt, React Native.',
        'Build websites using Next.js, React.js, Vue.js',
        'Implement APIs with REST API or GraphQL',
        'Coding, fix bugs in the mobile app using React Native, Expo',
      ],
      technologies: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Redux-toolkit',
        'Vue.js',
        'Next.js',
        'Nuxt.js',
        'Shadcn',
        'Ant Design',
        'MUI',
      ],
    },
    {
      company: 'Onechain Technology Joint Stock Company',
      logo: 'OC',
      period: 'Dec 2022 – Apr 2024',
      role: 'Front-end Developer',
      desc: [
        'Working with NextJS, ReactJS.',
        'Implementing front-end tasks such as UI design, logic, and functionality related to the front end, integrating APIs, mocking APIs when the back end has not yet handled data.',
        'Working with TypeScript, Redux, and other libraries such as Tailwind, Ant Design, Material UI, Chakra UI, Bootstrap, etc.',
        'Collaborating with and supporting back-end teams in testing APIs.',
        'Collaborating with QC teams in bug checking.',
        'Supporting and reviewing code for intern colleagues.',
        'Contributing ideas and suggestions for product improvement.',
      ],
      technologies: [
        'React.js',
        'Next.js',
        'Redux-toolkit',
        'Ant Design',
        'MUI',
        'Bootstrap',
        'Chakra UI',
        'SASS',
        'Tailwind',
      ],
    },
  ];

  return (
    <div className="space-y-8 relative z-1001">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center text-blue-700 dark:text-white font-bold text-xl">
                {exp.logo}
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                  {exp.company}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.period}
                </span>
              </div>
            </div>
            <span className="text-blue-700 dark:text-blue-400 font-semibold mt-2 md:mt-0">
              {exp.role}
            </span>
          </div>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-2 mt-2">
            {exp.desc.map((i, descIndex) => (
              <li key={descIndex}>{i}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-200 text-xs font-semibold border border-blue-200 dark:border-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
