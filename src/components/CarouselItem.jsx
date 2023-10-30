import './Carousel.css'

const CarouselItem = ({ name, image, code, demo }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={image} alt={name} className="h-full md:h-[500px]" />
            <h3 className="my-4 font-bold text-lg">{name}</h3>
            <div className="flex flex-col text-center sm:flex-row justify-between">
                <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Ver
                </a>
                <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Código
                </a>
            </div>
        </div>
    );
};

export default CarouselItem;
