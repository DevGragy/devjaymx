import React from "react";

const TechCard = ({image, name}) => {
    return (
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={image} alt={name} className="w-20 mx-auto" />
            <p className="my-4">{name}</p>
        </div>
    );
};

export default TechCard;
