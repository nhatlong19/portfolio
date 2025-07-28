import GradientButton from "./ui/gradient-button";

const HeroSection = () => {
  return (
    <section className="hero relative h-full w-full min-h-[1438px] bg-[#111] overflow-hidden bg-grey-1 xl:pt-[184px] px-safe lg:h-[1078px] lg:pt-28 md:h-auto md:pt-24 sm:pt-[92px]">
      <div className="container-main relative flex h-full flex-col">
        <h1 className="relative z-30 max-w-[616px] bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text font-title text-[76px] font-bold leading-[1] tracking-tight text-transparent ">
          Everything App for&nbsp;your teams
        </h1>
        <p className="relative z-30 mt-5 max-w-md text-[18px] leading-snug tracking-tight  text-white">
          Huly, an open-source platform, serves as an all-in-one replacement of
          Linear, Jira, Slack, and Notion.
        </p>
        <div className="mt-11 lg:mt-9 md:mt-7 sm:mt-5">
          <GradientButton>
          <span className="text-[#5A250A]">Try it Free</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 9"
        className="h-[9px] w-[17px] text-[#5A250A]"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
          clipRule="evenodd"
        />
      </svg>
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
