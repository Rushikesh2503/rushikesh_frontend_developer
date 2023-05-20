import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-dark rounded-lg text-center shadow-md p-4 border-2 border-sky-200 transition-transform hover:scale-105 cursor-pointer">
      <img
        src="https://res.cloudinary.com/rsbrsb/image/upload/v1684579564/sapceX/spacecraft-693217_960_720_ndujr3.jpg"
        alt={title}
        className="mx-auto rounded-lg w-24 h-24 object-cover mb-4 border-2 border-white"
      />
      <h2 className="text-lg text-sky-400 font-semibold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
