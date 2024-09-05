import Link from "next/link";

function TourCard({ tour }) {
  const { city, id, country } = tour;
  return (
    <Link
      href={`/dashboard/tours/${id}`}
      className='card card-compact btn bg-transparent border-black hover:bg-transparent hover:border-black hover:bg-black hover:bg-opacity-5 capitalize'
    >
      <div className='card-body items-center text-center justify-center'>
        <h2 className='card-title text-center'>
          {city}, {country}
        </h2>
      </div>
    </Link>
  );
}

export default TourCard;
