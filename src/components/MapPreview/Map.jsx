import { useMapPreview } from "@/providers/map-preview-provider";
import {
  Map as ReactGoogleMapsMap,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useEffect } from "react";

function Map() {
  const map = useMap();
  const { center } = useMapPreview();

  useEffect(() => {
    if (!map) {
      return;
    }
    map.setCenter(center);
  }, [center, map]);

  return (
    <ReactGoogleMapsMap
      style={{ width: "100%", height: "100%" }}
      defaultCenter={center}
      defaultZoom={10}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
      mapId='AI-TourPlanner'
    />
  );
}

export default Map;
