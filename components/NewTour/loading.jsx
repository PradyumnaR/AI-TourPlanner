function Loading() {
  return (
    <div className='flex h-full w-full'>
      <div className='flex-1 flex flex-col text-center items-center justify-center'>
        <div className='w-96'>
          <h1 className='text-xl font-bold'>Fetching your tour guide...</h1>
          <h2 className='text-base'>
            We are currently using the power of AI to fetch details. This may
            take a while. Please sit back and get ready for the journey ahead!!
          </h2>
          <span className='loading loading-lg m-4'></span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
