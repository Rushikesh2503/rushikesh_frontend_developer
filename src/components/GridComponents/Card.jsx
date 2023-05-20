import React from 'react';

const Card = ({data}) => {
  const formattedDate = new Date(data.original_launch).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <div className="bg-dark rounded-lg text-center shadow-md p-4 border-2 border-sky-200 transition-transform hover:scale-105 cursor-pointer">
      <img
        src="https://res.cloudinary.com/rsbrsb/image/upload/v1684579564/sapceX/spacecraft-693217_960_720_ndujr3.jpg"
        alt=""
        className="mx-auto rounded-lg w-24 h-24 object-cover mb-4 border-2 border-white"
      />
      <h2 className="text-lg text-sky-400 font-semibold mb-2">Capsule Serial: {data.capsule_serial}</h2>
      <p className="text-sm p-1">Capsule Id : {data.capsule_id}</p>
      <p className="text-sm p-1">Original Launch : {formattedDate}</p>
      <p className="text-sm p-1">Capsule Status: {data.status}</p>
      <p className="text-sm p-1">Capsule Type: {data.type}</p>
      <p className="text-sm p-1">Capsule Id: {data.capsule_id}</p>
    </div>
  );
};

export default Card;
