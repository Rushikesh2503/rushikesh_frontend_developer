
import './App.css';
import Banner from './components/Banner';
import GridContainer from './components/GridContainer';
import SearchContainer from './components/SearchContainer';
import Navbar from './components/Navbar';
import { useDispatch } from "react-redux";
import { applyFilters } from "./redux/actions";
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(applyFilters('', '', ''));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="text-3xl font-bold underline App">
      {/*Navbar with logo*/}
      <Navbar/>
      {/*Banner for Website*/}
      <Banner/>
      {/*SearchBar and filters*/}
      <SearchContainer/>
      {/*Grid Structure*/}
      <GridContainer/>
    </div>
  );
}

