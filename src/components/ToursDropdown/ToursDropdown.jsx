"use client";

import { getAllTours } from "@/utils/open-ai/tour";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";

function ToursDropdown({ onClickItem }) {
  const { data = [], isPending } = useQuery({
    queryKey: ["tours"],
    queryFn: () => getAllTours(),
  });

  if (isPending) {
    <Loading />;
  }

  return (
    <details className='dropdown mb-5'>
      <summary className='btn btn-primary'>Select tour</summary>
      <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
        {data.map(({ city, country, ...rest }, i) => {
          return (
            <li key={i} onClick={() => onClickItem({ city, country, ...rest })}>
              <a className='uppercase'>
                {city}, {country}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}

export default ToursDropdown;
