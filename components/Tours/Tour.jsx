"use client";

import { useState } from "react";
import { getAllTours } from "@/utils/open-ai/tour";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList";

function Tour() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isPending } = useQuery({
    queryKey: ["tours", { city: searchTerm }],
    queryFn: () => getAllTours(searchTerm),
  });

  return (
    <>
      <form className='max-w-lg mb-12'>
        <div className='join w-full'>
          <input
            type='text'
            placeholder='Enter city or country here...'
            className='input input-bordered join-item w-full border-black'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button
            className='btn bg-transparent border-black  hover:border-black hover:bg-black hover:bg-opacity-5 join-item uppercase active:text-white active:bg-black'
            type='button'
            disabled={isPending}
            onClick={() => setSearchTerm("")}
          >
            {isPending ? "please wait..." : "reset"}
          </button>
        </div>
      </form>
      {isPending ? (
        <span className='loading'></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
}

export default Tour;
