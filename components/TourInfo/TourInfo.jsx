function TourInfo({ tour }) {
  const { title, description, stops } = tour;

  return (
    <div className='max-w-2xl pb-8'>
      <h1 className='text-4xl font-semibold mb-4'>{title}</h1>
      <p className='leading-loose mb-6'>{description}</p>
      <p className='font-semibold mb-2'></p>
      <ul>
        {stops.map((stop, index) => {
          return (
            <li key={index} className='mb-4 bg-base-100 p-4 rounded-xl'>
              <p>{stop.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TourInfo;
