"use client";
import { useState, useEffect } from "react";
import toastr from 'toastr';
import 'toastr/build/toastr.css';


export const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const isFormValid = () => {
    return (
      Object.values(errors).every((error) => error === "") &&
      Object.values(formData).every((value) => value.trim() !== "")
    );
  };

  useEffect(() => {
    if (!isFormValid()) {
      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          toastr.success('Correo electrónico enviado exitosamente.', '', { "positionClass": "toast-bottom-right" }, { timeOut: 3000 });
        } else {
          toastr.error('Error al enviar el correo electrónico.', '', { "positionClass": "toast-bottom-right" }, { timeOut: 3000 });
        }
      } catch (error) {
        toastr.error('Error al enviar el correo electrónico.', '', { "positionClass": "toast-bottom-right" }, { timeOut: 3000 });
      }
    } else {
      toastr.error('Por favor, completa correctamente todos los campos.', '', { "positionClass": "toast-bottom-right" }, { timeOut: 3000 });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateName = () => {
    setErrors({
      ...errors,
      name:
        formData.name.trim() === ""
          ? "Por favor, introduce tu nombre completo."
          : "",
    });
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors({
      ...errors,
      email: !emailRegex.test(formData.email)
        ? "Por favor, introduce un correo electrónico válido."
        : "",
    });
  };

  const validatePhone = () => {
    const phoneRegex = /^\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$/;
    setErrors({
      ...errors,
      phone: !phoneRegex.test(formData.phone)
        ? "Por favor, introduce un número telefónico válido en el formato XX-XX-XX-XX-XX."
        : "",
    });
  };

  const validateMessage = () => {
    setErrors({
      ...errors,
      message:
        formData.message.trim() === "" ? "Por favor, escribe un mensaje." : "",
    });
  };

  return (
    <>
      <h1 className="text-2xl md:text-4xl text-blue-500 text-center font-bold mt-5">
        Pongase en contacto conmigo
      </h1>
      <div className="max-w-2xl md:max-w-6xl items-center justify-center m-auto bg-white rounded-xl shadow-xl">
        <p className="text-base md:text-xl text-gray-600 text-justify m-2 p-2 md:m-5 md:p-5 font-semibold">
          ¿Busca un impulso en su empresa? ¡Estoy aquí para ayudar! Si necesita
          talento y experiencia para llevar su proyecto al siguiente nivel, no
          dude en contactarme. Juntos, podemos convertir sus ideas en realidad y
          alcanzar el éxito que se merece.
        </p>

        <div className="m-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-base text-gray-600"
              >
                Nombre completo: *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                onChange={handleChange}
                onBlur={validateName} // Aquí llamamos a la función de validación en el evento onBlur
                value={formData.name}
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400"
              />

              {errors.name && <div className="text-red-600">{errors.name}</div>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-base text-gray-600"
              >
                Correo electrónico: *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@correo.com"
                onChange={handleChange}
                onBlur={validateEmail} // Aquí llamamos a la función de validación en el evento onBlur
                value={formData.email}
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400"
              />
              {errors.email && (
                <div className="text-red-600">{errors.email}</div>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="text-base text-gray-600">
                Número telefónico: *
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="55-12-34-567"
                onChange={handleChange}
                onBlur={validatePhone} // Aquí llamamos a la función de validación en el evento onBlur
                value={formData.phone}
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400"
              />
              {errors.phone && (
                <div className="text-red-600">{errors.phone}</div>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-base text-gray-600"
              >
                Mensaje: *
              </label>
              <textarea
                rows="5"
                id="message"
                name="message"
                placeholder="Tu mensaje"
                onChange={handleChange}
                onBlur={validateMessage} // Aquí llamamos a la función de validación en el evento onBlur
                value={formData.message}
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400"
              />
              {errors.message && (
                <div className="text-red-600">{errors.message}</div>
              )}
            </div>
            <div className="m-4">
              <button
                type="submit"
                className={`w-full p-4 mb-4 text-white text-xl font-semibold bg-blue-400 rounded-md 
              hover:bg-blue-600 focus:outline-none
              hover:text-white
              hover:-translate-y-2  
              hover:after:bottom-0 ${!isFormValid() && "opacity-50 cursor-not-allowed"
                  }`}
                disabled={!isFormValid()}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
