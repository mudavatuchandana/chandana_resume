import Image from "next/image";
import CardWrapper from "@/components/cards/card-wrapper";

const AboutCard = () => {
  return (
    <CardWrapper>
      <div className="static flex flex-col items-center sm:items-start px-6 py-5 sm:px-8 sm:py-6 gap-4">
        <div className="flex gap-2 sm:gap-6 flex-col items-center sm:justify-start sm:flex-row">
          <div className="relative w-16 h-16 min-w-16 sm:w-24 sm:min-w-24 sm:h-24 p-[2px] z-0 overflow-hidden rounded-full shadow-memoji">
            <Image src="/profile.jpeg" alt="Memoji" fill priority />
          </div>
          <div className="flex flex-col justify-center">
            <h1
              className="font-silka text-2xl sm:text-4xl leading-tight font-medium text-slate-900 dark:text-black"
              style={{ fontWeight: "600" }}
            >
              M Sri Chandana
            </h1>
          </div>
        </div>

        <p className="dark:text-black text-slate-900 tracking-wide leading-6 text-xs sm:text-sm">
          Master’s student in IT at ASU with experience in data science, machine
          learning, and cybersecurity.
          <br />
          Skilled in Python, SQL, and AI-driven analytics, with hands-on
          projects in big data and security.
        </p>
      </div>
    </CardWrapper>
  );
};

export default AboutCard;
