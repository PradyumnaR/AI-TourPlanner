"use client";
import { createContext, useContext } from "react";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
export const MapPreviewContext = createContext({});

export function MapPreviewProvider({ tour, children }) {
  console.log(tour);

  if (!tour) {
    return;
  }

  return (
    <MapPreviewContext.Provider
      value={{
        apiKey,
        center: {
          lat: Number(tour?.location?.lat),
          lng: Number(tour?.location?.lng),
        },
        ...tour,
      }}
    >
      {children}
    </MapPreviewContext.Provider>
  );
}

export const useMapPreview = () => useContext(MapPreviewContext);
