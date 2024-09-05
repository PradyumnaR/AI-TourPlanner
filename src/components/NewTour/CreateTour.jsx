"use client";

import TourStops from "./TourStops";

function CreateTour({ onSubmit, tour }) {
  return (
    <div className='flex flex-col'>
      <form onSubmit={onSubmit} className='max-w-2xl'>
        <h2 className='mb-4'>
          Create itinerary by city and country to visit &#x1F60E; &#128649;
          &#128641;
        </h2>
        <div className='join w-full'>
          <input
            type='text'
            className='input input-bordered join-item w-full border-black'
            placeholder='Enter city name'
            name='city'
            required
          />
          <input
            type='text'
            className='input input-bordered join-item w-full border-black'
            placeholder='Enter country name'
            name='country'
            required
          />
          <button
            type='submit'
            className='btn join-item bg-transparent border-black hover:bg-transparent hover:border-black hover:bg-black hover:bg-opacity-5 uppercase'
          >
            submit
          </button>
        </div>
      </form>
      <div className='mt-16'>{tour ? <TourStops tour={tour} /> : null}</div>
    </div>
  );
}

export default CreateTour;
