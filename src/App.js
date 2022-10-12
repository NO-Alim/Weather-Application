import Footer from './component/Footer';
import ForecastContainer from './component/forecast/ForecastContainer';
import Navbar from './component/Navbar';
import WeatherResult from './component/weatherResult/WeatherResult';
function App() {
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
