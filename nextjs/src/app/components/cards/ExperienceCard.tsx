import { DividerHorizontalIcon } from "@radix-ui/react-icons";

interface ExperienceCardProps {
  position: string;
  company: string;
  description: string;
  dates: {
    from: string;
    to: string;
  };
  technologies: string[];
}

export function ExperienceCard({
  position,
  company,
  description,
  dates,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="group flex flex-col rounded-md bg-black p-4 md:max-w-xl">
      <div className="flex w-full items-center gap-1 text-sm font-medium text-neutral-400 transition group-hover:text-neutral-200">
        <div>{dates.from}</div>
        <DividerHorizontalIcon />
        <div>{dates.to}</div>
      </div>
      <div className="flex flex-col lg:gap-3">
        <h3 className="font-medium text-white transition group-hover:text-sky-400">
          {position} - {company}
        </h3>
        <p className="text-sm font-normal text-neutral-400">{description}</p>
        <div className="flex flex-wrap gap-1 pt-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded-full border border-blue-900 bg-blue-500 px-2 text-sm font-normal"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
