"use client";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

function useLatLng(address) {
  const map = useMap();
  const geocoderLib = useMapsLibrary("geocoding");
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (!geocoderLib || !map) {
      return;
    }

    const geocoder = new geocoderLib.Geocoder();
    geocoder.geocode({ address: address }, function (results, status) {
      if (status === "OK") {
        const location = results[0].geometry.location;
        const lat = location.lat();
        const lng = location.lng();

        setCoordinates({ lat, lng });
      } else {
        setCoordinates(null);
      }
    });
  }, [geocoderLib, map, address]);

  return coordinates;
}

export default useLatLng;
