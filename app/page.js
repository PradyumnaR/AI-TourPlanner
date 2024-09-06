import Link from "next/link";

function HomePage() {
  return (
    <div className='hero min-h-screen bg-travel bg-cover bg-center'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>AI-TourPlanner</h1>
          <p className='py-6 text-lg leading-loose'>
            Plan your tour using AI. Powered by OpenAI, it enhances your travel
            experience and much more!!
          </p>
          <Link
            href='/dashboard'
            className='btn bg-transparent border-black  hover:border-black hover:bg-black hover:bg-opacity-5 join-item uppercase active:text-white active:bg-black'
          >
            Lets get started <span className='text-lg'>&#128640;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
