"use client";

import { useCallback, useState } from "react";
import ToursDropdown from "../ToursDropdown";
import MapPreview from "../MapPreview";
import { MapPreviewProvider } from "@/providers/map-preview-provider";

function Preview() {
  const [selectedTour, setSelectedTour] = useState(null);

  const handleSelectedTour = useCallback((tour) => {
    setSelectedTour(tour);
  });

  return (
    <div className='flex flex-col h-full'>
      <ToursDropdown onClickItem={handleSelectedTour} />
      <MapPreviewProvider tour={selectedTour}>
        <MapPreview />
      </MapPreviewProvider>
    </div>
  );
}

export default Preview;
