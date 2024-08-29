import { useState, useCallback } from "react";

import {
  Marker as ReactGoogleMapsMarker,
  InfoWindow,
  useMap,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import useLatLng from "./Hooks/useLatLng";
import { useMapPreview } from "@/providers/map-preview-provider";

function Marker({ index, address, description, ...rest }) {
  const [markerRef, marker] = useMarkerRef();
  const coordinates = useLatLng(address);
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  );

  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <>
      <ReactGoogleMapsMarker
        ref={markerRef}
        position={coordinates}
        label={`${index + 1}`}
        {...rest}
        onClick={handleMarkerClick}
      />
      {infoWindowShown && (
        <InfoWindow anchor={marker} onClose={handleClose}>
          <div className='uppercase mb-3'>{description}</div>
          <p className='font-bold'>Address: {address} </p>
        </InfoWindow>
      )}
    </>
  );
}

export default Marker;
