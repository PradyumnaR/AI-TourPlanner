"use client";

import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "../ThemeToggle";
import { useRouter } from "next/navigation";

function SidebarHeader() {
  const router = useRouter();

  return (
    <div
      className='flex items-center mb-4 gap-4 px-4 hover:cursor-pointer'
      onClick={() => router.push("/dashboard/tours/new-tour")}
    >
      <SiOpenaigym className='w-10 h-10 text-primary' />
      <h2 className='text-xl font-extrabold text-primary mr-auto'>
        AI-TourPlanner
      </h2>
      {/* <ThemeToggle /> */}
    </div>
  );
}

export default SidebarHeader;
