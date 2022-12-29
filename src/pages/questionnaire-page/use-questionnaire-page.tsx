import { useCallback, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const useQuestionnairePage = () => {
  const [isOpenInput, setIsOpenInput] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const toggleInput = () => {
    setIsOpenInput(!isOpenInput);
  };
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cfbbb8x",
      "template_m81z2nd",
      e.target,
      "_G1NABxE2QnPGrTHI"
    );
    resetForm();
    setIsOpenInput(false);
  };
  const resetForm = useCallback(() => {
    if (formRef?.current?.reset) {
      formRef?.current?.reset();
    }
  }, []);

  return { resetForm, sendEmail, toggleInput, isOpenInput, formRef };
};
