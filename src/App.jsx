
import './App.css';
import Banner from './components/Banner';
import GridContainer from './components/GridContainer';
import Navbar from './components/css/Navbar';

export default function App() {
  return (
    <div className="text-3xl font-bold underline App">
      <Navbar/>
      {/*Banner for Website*/}
      <Banner/>

      <GridContainer/>
    </div>
  );
}

