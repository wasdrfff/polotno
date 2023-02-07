import { useCallback, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const useContactPage = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = useCallback(() => {
    setPhone("");
    setName("");
    setEmail("");
  }, []);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cfbbb8x",
      "template_17halig",
      e.target,
      "_G1NABxE2QnPGrTHI"
    );
    resetForm();
    e.target.reset();
  };

  const validationPhone = (phone: string) => {
    const regPhone = /\+7\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d/;
    if (!regPhone.test(phone)) {
      return "Введите номер телефона";
    }
    return "";
  };

  const validationEmail = (email: string) => {
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      return "Введите верный email";
    }
    return "";
  };

  const validationName = (name: string) => {
    if (!name) {
      return "Введите имя";
    }
    return "";
  };

  return {
    sendEmail,
    validationEmail,
    validationName,
    validationPhone,
    phone,
    name,
    email,
    formRef,
    setName,
    setPhone,
    setEmail,
  };
};
