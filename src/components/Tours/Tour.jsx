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
            placeholder='enter city or country here...'
            className='input input-bordered join-item w-full'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button
            className='btn btn-primary join-item uppercase'
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
