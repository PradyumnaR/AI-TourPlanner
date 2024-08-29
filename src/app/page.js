import Link from "next/link";

function HomePage() {
  return (
    <div className='hero min-h-screen bg-travel bg-cover bg-center'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>AI-TripPlanner</h1>
          <p className='py-6 text-lg leading-loose'>
            Plan your tour using AI. Powered by OpenAI, it enhances your travel
            experience and much more!!
          </p>
          <Link href='/dashboard' className='btn btn-secondary uppercase'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
