import TourInfo from "@/components/TourInfo";
import { generateTourImage, getSingleTour } from "@/utils/open-ai/tour";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function SingleTourPage({ params }) {
  const tour = await getSingleTour(params.id);

  if (!tour) {
    redirect("/tours");
  }

  // const tourImage = await generateTourImage({
  //   city: tour.city,
  //   country: tour.country,
  // });

  return (
    <div>
      <Link
        href='/dashboard/tours'
        className='btn btn-secondary mb-12 uppercase'
      >
        back to tours
      </Link>
      {/* {tourImage ? (
        <div>
          <Image
            src={tourImage}
            width={300}
            height={300}
            className='rounded-xl shadow-xl mb-16 h-96 w-96 object-cover'
            alt={tour.title}
            priority
          />
        </div>
      ) : null} */}
      <TourInfo tour={tour} />
    </div>
  );
}

export default SingleTourPage;
