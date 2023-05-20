import React, { useEffect, useState } from 'react';
import Grid from './GridComponents/Grid';
import { useSelector } from 'react-redux';

const GridContainer = () => {
    const data = useSelector((store) => store.reducer.data);
    const isProcessing = useSelector((store) => store.reducer.isProcessing);
    // define states from pagination
    const [dataForMapping, setDataForMapping] = useState(data.slice(0, 10));
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / 10);
    //console.log(data)

    // useEffect depend on page and filters
    useEffect(() => {
        const startIndex = (currentPage - 1) * 10;
        const endIndex = startIndex + 10;

        // slice data array to get 10 results each time
        setDataForMapping(data.slice(startIndex, endIndex));
    }, [currentPage, data]);
  return (
    <div>
        {isProcessing?<>Loading....</>:
        <>
        <div className="container mx-auto w-90">
          <Grid data={dataForMapping} />
        </div>
        {/* BEGIN Pagination */}
        <div className="pagination">
            <div className="flex flex-row align-center justify-center">
            <button className="w-30 border border-white text-white py-2 px-4 m-3 rounded-md shadow-sm sm:text-sm disabled:pointer-events-none disabled:bg-slate-600" disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}>
                  Previous
                </button>
                <button className="w-30 border border-white text-white py-2 px-4 m-3 rounded-md shadow-sm sm:text-sm disabled:pointer-events-none disabled:bg-slate-600"  disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}>
                  Next
                </button>
              </div>
          </div>
          {/* END Pagination */}
        </>}
    
    </div>
  )
}

export default GridContainer