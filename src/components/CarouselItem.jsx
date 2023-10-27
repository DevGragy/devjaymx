import React from "react";

const CarouselItem = ({ name, image, urlToCode, preview }) => {
    return (
        // <Paper>
        //     <img src={image} alt={name} />
        //     <h2>{name}</h2>
        //     <Button href={liveCode}>Ver</Button>
        //     <Button href={urlToCode}>Codigo</Button>
        // </Paper>
        <div
            style={{ backgroundImage: `url(${image})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
            <div className="opacity-0 group-hover:opacity-100 duration-500 text-center">
                <span className="text-xl font-bold text-white tracking-wider ">
                    {name}
                </span>
                <div className="pt-8 text-center  ">
                    <a
                        href={preview}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                            Ver
                        </button>
                    </a>
                    <a
                        href={urlToCode}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                            Código
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
