import React, { useState } from "react";
import contact from "../../../assets/Contact us-amico.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to send email");
        }

        const result = await response.json();
        setSuccessMessage(result.message);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Failed to send email", error);
        alert("Failed to send email");
      }
    }
  };

  return (
    <section id="contact" className="bg-sky-blue py-10">
      <div className="mx-10 sm:mx-auto">
        <div className="text-blue-600 bg-blue-600 bg-opacity-20 text-lg rounded-xl w-40 mx-auto my-0">
          <h4 className="text-center mb-10">Contact</h4>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div data-aos="fade-right">
            <img
              loading="lazy"
              className="w-52 md:w-96"
              src={contact}
              alt="contact-us-img"
            />
          </div>

          <form
            data-aos="fade-left"
            onSubmit={handleSubmit}
            className="p-4 shadow-lg w-full md:w-1/3"
          >
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
