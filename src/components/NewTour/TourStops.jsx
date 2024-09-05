"use client";
import { useCallback, useEffect, useState } from "react";
import { createNewTour, getExistingTour } from "@/utils/open-ai/tour";
import toast from "react-hot-toast";

function TourStops({ tour }) {
  const [selectedStops, setSelectedStops] = useState([]);
  const [isExisting, setIsExisting] = useState(false);
  const { title, description, stops, city, country } = tour;

  const handleSelectedStops = useCallback((newStop) => {
    let newSelectedStops = [];

    if (selectedStops.indexOf(newStop) != -1) {
      newSelectedStops = [...selectedStops];
      newSelectedStops.splice(newSelectedStops.indexOf(newStop), 1);
    } else {
      newSelectedStops = [...selectedStops, newStop];
    }

    setSelectedStops([...newSelectedStops]);
  });

  const handleCreateTour = useCallback(async () => {
    await createNewTour({ ...tour, stops: [...selectedStops] });
    toast.success("successfully added stops to tours itinerary");
  });

  useEffect(() => {
    async function getTour({ city, country }) {
      const existingTour = await getExistingTour({ city, country });
      setIsExisting(!!existingTour);
    }

    getTour({ city, country });
  }, [city, country]);

  return (
    <div className='max-w-2xl pb-8'>
      <h1 className='text-4xl font-semibold mb-4'>{title}</h1>
      <p className='leading-loose mb-6'>{description}</p>
      <p className='font-semibold mb-2'>
        {isExisting
          ? "Already added to the itinerary. Enjoy your trip !!"
          : "Select stops to add it to the itinerary:"}
      </p>
      <ul>
        {stops.map((stop, index) => {
          return (
            <li
              key={index}
              onClick={() => handleSelectedStops(stop)}
              className={`mb-4 bg-base-100 p-4 rounded-xl hover:shadow-lg hover:bg-sky-400 hover:cursor-pointer active:shadow-2xl active:bg-sky-800 ${
                selectedStops.indexOf(stop) != -1 && !isExisting
                  ? "bg-sky-800 hover:bg-sky-800"
                  : ""
              }`}
            >
              <p>{stop.description}</p>
            </li>
          );
        })}
      </ul>
      {!isExisting ? (
        <form action={handleCreateTour}>
          <button
            type='submit'
            className='btn bg-transparent border-black hover:bg-transparent hover:border-black hover:bg-black hover:bg-opacity-5 join-item uppercase'
            disabled={selectedStops.length === 0 ? true : false}
          >
            Create
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default TourStops;
