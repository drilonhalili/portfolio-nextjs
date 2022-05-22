import React from 'react'
import { Formik, Form } from "formik"
import * as Yup from "yup"
import _ from "lodash"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast, Slide } from "react-toastify"

import { phoneRegExp } from '../utils/regex'
import InputForm from './InputForm'

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Enter a name")
    .min(3, "Name must be at least 3 characters")
    .required("The name is required")
    .nullable(),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("The email is required"),
  subject: Yup.string()
    .required("Enter a subject")
    .min(3, "Subject must be at least 3 characters"),
  message: Yup.string()
    .required("Enter a message")
    .min(3, "Message must be at least 3 characters"),
})

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  }

  const handleSubmit = (
    { firstName, phone, email, subject, message },
    resetForm
  ) => {
    try {
      emailjs.send(
        "service_ll3cddp",
        "template_6o50ysq",
        {
          firstName,
          phone,
          email,
          subject,
          message,
        },
        "9fXZhaxE0pyNwdJ0h"
      )
      toastNotification()
      resetForm()
    } catch (error) {
      // TODO: add a toast notification
    }
  }

  const toastNotification = () =>
    toast("An e-mail message was sent.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  
  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <ToastContainer transition={Slide} />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
          validationSchema={ContactFormSchema}
          onReset
        >
          {() => (
            <Form>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <InputForm
                  labelTitle="Name"
                  type="text"
                  name="firstName"
                  placeholder="Enter your name"
                />
                <InputForm
                  labelTitle="Phone Number"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter a phone number"
                />
              </div>
              <InputForm
                labelTitle="Email"
                type="email"
                id="email"
                name="email"
                placeholder="Enter a email"
                padding="py-2"
              />
              <InputForm
                labelTitle="Subject"
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter a subject title"
                padding="py-2"
              />
              <InputForm
                labelTitle="Message"
                as="textarea"
                id="message"
                name="message"
                placeholder="Enter a message"
                padding="py-2"
                rows="10"
                flex="flex"
              />
              <button type="submit" className="w-full p-4 text-gray-100 mt-4">
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ContactForm