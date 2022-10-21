import { useState } from 'react';
import Geocode from 'react-geocode';
import { useSelector } from 'react-redux';

export default function useGetLocationName() {
  const { lat, lng } = useSelector((state) => state.location);
  const [address, setAddress] = useState('');

  //Geocode for address
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API);

  // set response language. Defaults to english.
  Geocode.setLanguage('en');

  // set response region. Its optional.
  // A Geocoding request with region=es (Spain) will return the Spanish city.
  Geocode.setRegion('es');

  Geocode.fromLatLng(lat, lng).then(
    (response) => {
      //const address = response.results[0].formatted_address;
      let city, state, country;
      for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (
          let j = 0;
          j < response.results[0].address_components[i].types.length;
          j++
        ) {
          // eslint-disable-next-line default-case
          switch (response.results[0].address_components[i].types[j]) {
            case 'locality':
              city = response.results[0].address_components[i].long_name;
              break;
            case 'administrative_area_level_1':
              state = response.results[0].address_components[i].long_name;
              break;
            case 'country':
              country = response.results[0].address_components[i].long_name;
              break;
          }
        }
      }
      let fullAddress;
      if (city) {
        fullAddress = city;
      } else {
        fullAddress = 'Unknown';
      }
      if (state) {
        fullAddress += `,${state}`;
      }
      if (country) {
        fullAddress += `,${country}`;
      }
      setAddress(fullAddress);
    },
    (error) => {
      setAddress('Unknown');
    }
  );

  return address;
}
