import { useState } from "react";
import "./style.scss";
import InputMask from "react-input-mask";

type TProps = {
  name: string;
  value: string;
  placeholder: string;
  pattern?: string;
  type?: string;
  mask?: string | (string | RegExp)[];
  required?: boolean;
  onChange: (value: string) => void;
  getErrorMessage?: (value: string) => string;
};

type TInputStatus = "default" | "focused" | "error" | "valid";

export const Input = ({
  name,
  value,
  type,
  placeholder,
  required,
  mask,
  onChange,
  getErrorMessage,
}: TProps) => {
  const [status, setStatus] = useState<TInputStatus>("default");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const onFocus = () => {
    setStatus("focused");
  };
  const onBlur = () => {
    if (!getErrorMessage || !value) {
      setStatus("default");
      return;
    }

    const errorMessage = getErrorMessage(value);

    setErrorMessage(errorMessage);
    setStatus(errorMessage ? "error" : "valid");
  };

  if (mask) {
    return (
      <div className="input">
        <InputMask
          required={required}
          mask={mask}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={"input__field " + status}
          placeholder={placeholder}
        />
        <span className="input__error">{errorMessage}</span>
      </div>
    );
  }

  return (
    <div className="input">
      <input
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={"input__field " + status}
        placeholder={placeholder}
      />
      <span className="input__error">{errorMessage}</span>
    </div>
  );
};
