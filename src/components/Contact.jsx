const Contact = () => {
  return (
    <div
      id="contact"
      className=" w-full h-screen flex justify-center items-center p-4 mt-[120px] sm:mt-0"
    >
      <form
        action="mail.php"
        method="POST"
        className=" flex flex-col max-w-[600px] w-full text-center"
      >
        <div className="py-10">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-red-500 text-gray-300 ">
            Contacto
          </p>
          <p className=" text-gray-300 my-4 text-lg font-medium">
            {`Envía el siguiente formulario o envíame un correo -
            devjaymx@gmail.com`}
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2 focus:bg-gray-50 rounded"
          type="text"
          placeholder="Nombre"
          name="name"
          required
        />
        <input
          className=" bg-[#ccd6f6] my-4 p-2 focus:bg-gray-50 rounded"
          type="email"
          placeholder="Correo"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 focus:bg-gray-50 rounded"
          name="message"
          rows="10"
          placeholder="Mensaje"
          required
        ></textarea>
        <button
          className="text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center duration-300 w-full text-center justify-center rounded"
          type="submit"
        >
          ¡Contáctame! ☕
        </button>
      </form>
    </div>
  );
};

export default Contact;
