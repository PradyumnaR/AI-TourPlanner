"use client";
import { useCallback, useEffect, useState } from "react";
import { useMapPreview } from "@/providers/map-preview-provider";
import { APIProvider } from "@vis.gl/react-google-maps";

import Map from "./Map";
import Marker from "./Marker";

function MapPreview() {
  const { apiKey, stops = [], center } = useMapPreview();
  const [markers, setMarkers] = useState([]);

  const clearAllMarkers = useCallback(() => {
    setMarkers([]);
  });

  const addMarkers = useCallback(() => {
    const newMarkers = [...stops];
    setMarkers(newMarkers);
  }, [stops]);

  useEffect(() => {
    clearAllMarkers();
    addMarkers();
  }, [center]);

  return (
    <div className='flex-1'>
      <APIProvider apiKey={apiKey}>
        <Map />
        {markers.map((marker, i) => {
          return (
            <Marker key={i} address={marker.address} index={i} {...marker} />
          );
        })}
      </APIProvider>
    </div>
  );
}
export default MapPreview;
