import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './component/Footer';
import ForecastContainer from './component/forecast/ForecastContainer';
import Navbar from './component/Navbar';
import WeatherResult from './component/weatherResult/WeatherResult';
import { locationSet } from './features/location/locationSlice';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latlng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      dispatch(locationSet(latlng));
    });
  }, [dispatch]);
  return (
    <div className="App bg-slate-700 text-white min-h-screen">
      <Navbar />
      <WeatherResult />
      <ForecastContainer />
      <Footer />
    </div>
  );
}

export default App;
