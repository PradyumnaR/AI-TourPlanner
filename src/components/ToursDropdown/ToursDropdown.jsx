"use client";

import { getAllTours } from "@/utils/open-ai/tour";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import { useCallback, useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

function ToursDropdown({ onClickItem }) {
  const { data = [], isPending } = useQuery({
    queryKey: ["tours"],
    queryFn: () => getAllTours(),
  });

  const [isOpen, setIsOpen] = useState(false);
  const handleOnClickDropdown = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  if (isPending) {
    <Loading />;
  }

  return (
    <>
      <div className='mb-2'>
        Please select tour from below dropdown to preview
      </div>
      <details className='dropdown mb-5'>
        <summary
          className='btn bg-transparent border-black hover:bg-transparent hover:border-black hover:bg-black hover:bg-opacity-5 uppercase'
          onClick={handleOnClickDropdown}
        >
          Select tour
          <span className='ml-1'>
            {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </span>
        </summary>
        <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
          {data.map(({ city, country, ...rest }, i) => {
            return (
              <li
                key={i}
                onClick={() => onClickItem({ city, country, ...rest })}
              >
                <a className='uppercase'>
                  {city}, {country}
                </a>
              </li>
            );
          })}
        </ul>
      </details>
    </>
  );
}

export default ToursDropdown;
