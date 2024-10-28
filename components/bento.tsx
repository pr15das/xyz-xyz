import React from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Smart Experience Curator",
    description:
      "The inbuilt AI analyzes your entries to curate relevant experiences tailored for specific job applications and automatically adjusts resume content based on job descriptions.",
    header: (
      <Image
        src="https://ibb.co/5xRqqmT"
        alt="Smart Experience Curator"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Experience Suggestion Engine",
    description:
      "Get suggestions for skills to develop and opportunities to explore based on your career aspirations.",
    header: (
      <Image
        src="https://via.placeholder.com/400x200"
        alt="Experience Suggestion Engine"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dynamic Career Journal",
    description:
      "Keep a daily journal of your activities, experiences, and insights. Record internships, seminars, volunteer work, and achievements easily.",
    header: (
      <Image
        src="https://via.placeholder.com/400x200"
        alt="Dynamic Career Journal"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Interview Prep Dashboard",
    description:
      "AI generates summaries, key pointers, and potential interview questions based on your past experiences. Provides tips and strategies to ace upcoming interviews.",
    header: (
      <Image
        src="https://via.placeholder.com/800x200"
        alt="Interview Prep Dashboard"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];