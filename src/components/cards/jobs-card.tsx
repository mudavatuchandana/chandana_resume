import CardWrapper from "@/components/cards/card-wrapper";
import classNames from "classnames";

const jobsData = [
  {
    role: "Project Trainee",
    company: "APTOnline Limited",
    date: "Apr 2024 – June 2024",
  },
  {
    role: "Data Science Intern",
    company: "KrtrimaIQ Cognitive Solutions",
    date: "Dec 2023 – May 2024",
  },
];

const JobItem = ({ job }: { job: any }) => {
  const { role, company, date } = job;

  return (
    <div className="flex justify-between flex-col items-stretch md:flex-row md:items-center py-4 gap-3 md:gap-2">
      {/* Left Section: Role and Date (Mobile) */}
      <div className="flex flex-col gap-1">
        {/* Date (Visible on Mobile) */}
        <h5 className="block text-xs md:text-md md:hidden font-medium dark:text-black text-black opacity-65">
          {date}
        </h5>
        {/* Role */}
        <h1 className="text-3xl md:text-4xl font-medium dark:text-black text-black text-left w-fit opacity-90">
          {role}
        </h1>
      </div>

      {/* Right Section: Company and Date (Desktop) */}
      <div className="flex flex-col md:items-end md:text-right">
        {/* Company */}
        <h3 className="text-sm lg:text-lg font-medium dark:text-black text-black opacity-90">
          {company}
        </h3>
        {/* Date (Visible on Desktop) */}
        <h5 className="hidden md:block text-xs lg:text-md font-medium dark:text-black text-black opacity-65">
          {date}
        </h5>
      </div>
    </div>
  );
};

const JobsCard = () => {
  return (
    <CardWrapper>
      <div className="static h-full flex flex-col gap-4 p-8 justify-start">
        <div className="flex flex-col items-start gap-1">
          {/* <h4 className="text-xs font-medium opacity-60 uppercase">
            6 Years of
          </h4> */}
          <h1 className="text-2xl font-medium dark:text-black text-black uppercase opacity-90 text-center">
            Experience
          </h1>
        </div>
        <div className="flex flex-col relative z-10 lg:justify-around">
          <JobItem job={jobsData[0]} />

          {jobsData.slice(1).map((job, index) => (
            <JobItem key={index} job={job} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default JobsCard;
