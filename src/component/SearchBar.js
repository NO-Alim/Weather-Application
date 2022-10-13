import { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { useDispatch } from 'react-redux';
import { locationSet } from '../features/location/locationSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const [address, setAddress] = useState('');

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        dispatch(locationSet(latLng));
      })
      .catch((error) => console.error('Error', error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="bg-slate-900">
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
            })}
            className="bg-slate-700 rounded-full focus:outline-none px-5 py-1"
          />
          <div
            className={`autocomplete-dropdown-container bg-transparent fixed flex flex-col gap-2 z-[1000]${
              suggestions?.length > 0 && 'p-2 rounded-md'
            }`}
          >
            {loading && (
              <div className="animate-pulse flex space-x-4 px-5 mt-3">
                <div className="h-1 bg-slate-500 rounded w-1 flex justify-center items-center"></div>
                <div className="h-1 bg-slate-500 rounded w-1 flex justify-center items-center"></div>
                <div className="h-1 bg-slate-500 rounded w-1 flex justify-center items-center"></div>
                <div className="h-1 bg-slate-500 rounded w-1 flex justify-center items-center"></div>
                <div className="h-1 bg-slate-500 rounded w-1 flex justify-center items-center"></div>
                <div className="h-1 bg-slate-500 rounded w-1 flex justify-center items-center"></div>
              </div>
            )}
            {suggestions.map((suggestion, ind) => {
              return (
                <div {...getSuggestionItemProps(suggestion)} key={ind}>
                  <div
                    className={`bg-slate-800 px-5 py-2 cursor-pointer hover:bg-slate-900 z-[1000] ${
                      suggestion.active && 'bg-slate-90'
                    } `}
                  >
                    <span onClick={() => setAddress(suggestion.description)}>
                      {suggestion.description?.length < 35
                        ? `${suggestion.description}`
                        : `${suggestion.description.substring(0, 33)}...`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default SearchBar;
