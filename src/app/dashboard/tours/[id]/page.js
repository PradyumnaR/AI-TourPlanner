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
        className='btn bg-transparent border-black hover:bg-transparent hover:border-black hover:bg-black hover:bg-opacity-5 join-item uppercase mb-12'
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
