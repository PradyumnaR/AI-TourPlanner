export const Themes = {
  light: "corporate",
  dark: "business",
};

export const ToursQuery = ({
  city,
  country,
}) => `Find a ${city} in this ${country}.
If ${city} in this ${country} exists, create a list of things families can do in this ${city},${country}. 
Once you have a list, create a maximum of 4 stops tour. Response should be in the following JSON format: 
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "description of the city and tour",
    "location": {"lat": "${city} latitude", "lng": "${city} longitude"}
    "stops": [
      {
        "description": "short paragraph on the stop 1",
        "address": "Address of stop 1"
      }, 
      {
        "description": "short paragraph on the stop 2",
        "address": "Address of stop 2"
      },
      { 
        "description": "short paragraph on the stop 3",
        "address": "Address of stop 3"
      }
    ]
  }
}
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country} return { "tour": null }, with no additional characters.`;
