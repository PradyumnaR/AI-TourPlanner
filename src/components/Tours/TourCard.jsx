import Link from "next/link";

function TourCard({ tour }) {
  const { city, id, country } = tour;
  return (
    <Link
      href={`/dashboard/tours/${id}`}
      className='card card-compact rounded-xl bg-base-100'
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
