const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-screen flex justify-center items-center p-4 mt-[120px] sm:mt-0"
    >
      <form
        action='https://getform.io/f/4b61f4b7-3f3d-47bf-98d6-89e344688545'
        method="POST"
        className=" flex flex-col max-w-[600px] w-full text-center"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500 text-gray-300">
            Contacto
          </p>
          <p className=" text-gray-300 py-4 text-lg font-medium">
          {`{ Envia el siguiente formulario o enviame un correo -
            devjaymx@gmail.com }`}
            
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Nombre"
          name="Nombre"
        />
        <input
          className=" bg-[#ccd6f6] my-4 p-2"
          type="email"
          placeholder="Correo"
          name="Email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="Mensaje"
          rows="10"
          placeholder="Mensaje"
        ></textarea>
        <button
          className="text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center duration-300 w-full text-center justify-center"
          type="submit"
        >
          Contactame! ☕
        </button>
      </form>
    </div>
  );
};

export default Contact;
