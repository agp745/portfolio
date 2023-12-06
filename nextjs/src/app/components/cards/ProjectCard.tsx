import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/cn";

interface ProjectCardProps {
  title:
    | "Go Load Balancer"
    | "resizer-cli"
    | "Application Tracker"
    | "EzGo"
    | "Pub Crawl"
    | "Projectied"
    | "My Gamer List";
  description: string;
  technologies: string[];
  link: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  link,
  className,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(
        "group flex rounded-md border-black bg-cover bg-no-repeat shadow-inner md:max-w-xl",
        className,
        {
          "bg-blue-800/20 bg-[url(/projects/resizer-cli.png)] bg-contain bg-right":
            title === "resizer-cli",
          "bg-blue-800/30": title === "Application Tracker",
          "bg-[url(/projects/ezgo.png)]": title === "EzGo",
          "bg-[url(/projects/pubcrawl.png)]": title === "Pub Crawl",
          "bg-[url(/projects/projectied.png)]": title === "Projectied",
          "bg-[url(/projects/mgl.png)]": title === "My Gamer List",
        },
      )}
    >
      <div className="rounded-md bg-black/50 p-4 backdrop-blur-sm transition duration-200 ease-in lg:bg-black/100 lg:hover:bg-black/50">
        <div className="flex flex-col lg:gap-3">
          <div className="flex items-center gap-1">
            <h3 className="font-medium text-white transition duration-100 ease-in group-hover:text-sky-400">
              {title}
            </h3>
            <ArrowTopRightIcon className="-translate-x-[2px] translate-y-[3px] transition duration-100 ease-in group-hover:-translate-y-[1px] group-hover:translate-x-[2px] group-hover:text-sky-500" />
          </div>
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
    </a>
  );
}
