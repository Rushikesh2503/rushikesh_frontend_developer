
import './App.css';
import Banner from './components/Banner';
import GridContainer from './components/GridContainer';
import SearchContainer from './components/SearchContainer';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { applyFilters } from "./redux/actions";
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(applyFilters('', '', ''));
  }, []);
  
  return (
    <div className="text-3xl font-bold underline App">
      <Navbar/>
      {/*Banner for Website*/}
      <Banner/>

      <SearchContainer/>
      <GridContainer/>
    </div>
  );
}

