import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters } from "../redux/actions";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [capsuleSerial, setCapsuleSerial] = useState("");
  const data = useSelector((store) => store.reducer);
  const [capsuleSerialOpt, setCapsuleSerialOpt] = useState([]);
  const [capsuleStatusOpt, setCapsuleStatusOpt] = useState([]);
  const [total, setTotal] = useState(data.length);

  useEffect(() => {
    setTotal(data.data.length);
    setCapsuleSerialOpt(data.capsuleSerialArray);
    setCapsuleStatusOpt(data.capsuleStatusArray);
  }, [data]);

  function handelFilters() {
    dispatch(applyFilters(status, search, capsuleSerial));
  }

  return (
    <div className="bg-black py-10 w-90 mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
          {/* Search Bar */}
          <div className="sm:col-span-6 lg:col-span-2">
            <input
              type="text"
              name="search"
              placeholder="Search by Type"
              autoComplete="off"
              onChange={(e) => {
                setSearch(e.target.value.trim());
              }}
              className="w-full bg-black rounded-md border-2 py-2 px-4 text-white border-white shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-slate-50 sm:text-sm"
            />
          </div>

          {/* Dropdowns */}
          <div className="sm:col-span-6 lg:col-span-2">
            <input
              type="text"
              name="search"
              placeholder="Search by Capsule Serial"
              autoComplete="off"
              onChange={(e) => {
                setCapsuleSerial(e.target.value.trim());
              }}
              className="w-full bg-black rounded-md border-2 py-2 px-4 text-white border-white shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-slate-50 sm:text-sm"
            />
          </div>

          <div className="sm:col-span-6 lg:col-span-1">
            <select
              name="status"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              className="w-full bg-gray cursor-pointer rounded-md border-2 py-2 px-4 text-white border-white  shadow-sm focus:ring-2 focus:ring-slate-50 sm:text-sm"
            >
              <option value="">Select Status</option>
              <option value="retired">Retired</option>
              <option value="active">Active</option>
              <option value="destroyed">Destroyed</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          {/* Apply Filter Button */}
          <div className="sm:col-span-6 lg:col-span-1">
            <button
              className="w-full border border-white text-white py-2 px-4 rounded-md shadow-sm sm:text-sm"
              onClick={(e) => {
                handelFilters();
              }}
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
      <div className="text-lg my-6 text-sky-400 flex flex-row justify-center align-middle">
        {total} Results Found !
      </div>
    </div>
  );
};

export default SearchContainer;
