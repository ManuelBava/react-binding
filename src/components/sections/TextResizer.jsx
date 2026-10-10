import { useState } from "react";
import RadioButton from "../UI/RadioButton";

export default function TextResizer() {
  const [size, setSize] = useState("6");

  const radioButtonProps = [
    {
      formField: "form-field",
      id: "radiodanger",
      theme: "danger",
      text: "small",
      value: "6", // fs-6 = piccolo
    },
    {
      formField: "form-field",
      id: "radiowarning",
      theme: "warning",
      text: "medium",
      value: "4", // fs-4 = medio
    },
    {
      formField: "form-field",
      id: "radioinfo",
      theme: "info",
      text: "large",
      value: "2", // fs-2 = grande
    },
  ];

  return (
    <section className="my-5">
      <h2 className={`fs-${size}`}>TEXT TO BE RESIZED</h2>

      {radioButtonProps.map(({ formField, id, theme, text, value }) => (
        <RadioButton
          key={id}
          name="text-resizer-group"
          formField={formField}
          id={id}
          theme={theme}
          text={text}
          checked={size === value}
          onChange={() => setSize(value)}
        />
      ))}
    </section>
  );
}
