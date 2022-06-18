import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = ({}) => {
    const initialValues = { name: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios({
                method: "post",
                url: "https://devjaymx.com/api/mail.php",
                data: formValues,
                headers: { "content-type": "application/json" },
            });
            if (response) {
                console.log(formValues);
                setFormErrors(validate(formValues));
                setIsSubmit(true);
                console.log(response);
            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Hubo un error inesperado",
                showConfirmButton: false,
                timer: 3000,
            });
            console.log(error);
        }
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/g;

        if (!values.name) {
            errors.name = "Nombre obligatorio!";
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Nombre obligatorio!",
                showConfirmButton: false,
                timer: 3000,
            });
        }
        if (!values.email) {
            errors.email = "Email obligatorio!";
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Email obligatorio!",
                showConfirmButton: false,
                timer: 3000,
            });
        } else if (!regex.test(values.email)) {
            errors.email = "Ingrese un email valido!";
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Ingrese un email valido!",
                showConfirmButton: false,
                timer: 3000,
            });
        }
        if (!values.message) {
            errors.message = "Mensaje obligatorio!";
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Mensaje obligatorio!",
                showConfirmButton: false,
                timer: 3000,
            });
        }

        if (!values.name && !values.email && !values.message) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Error en alguno de los campos",
                showConfirmButton: false,
                timer: 3000,
            });
        }
        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Email enviado!",
                showConfirmButton: false,
                timer: 2000,
            });
        }
    }, [formErrors]);

    return (
        <div
            id="contact"
            className=" w-full h-screen flex justify-center items-center p-4 mt-[120px] sm:mt-0"
        >
            <form
                action="#"
                onSubmit={handleSubmit}
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
                    className={
                        !formErrors.name
                            ? "contact-buttons"
                            : "contact-buttons focus:border-red-500 "
                    }
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                />
                <p className=" text-left text-red-500 mt-2">
                    {formErrors.name}
                </p>
                <input
                    className={
                        !formErrors.email
                            ? "contact-buttons my-4 p-2"
                            : "contact-buttons focus:border-red-500 my-4 p-2"
                    }
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <p className=" text-left text-red-500 mb-2">
                    {formErrors.email}
                </p>

                <textarea
                    className={
                        !formErrors.message
                            ? "contact-buttons p-2"
                            : "contact-buttons p-2 focus:border-red-500"
                    }
                    name="message"
                    rows="10"
                    placeholder="Mensaje"
                    value={formValues.message}
                    onChange={handleChange}
                ></textarea>
                <p className=" text-left text-red-500 mt-2">
                    {formErrors.message}
                </p>
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
