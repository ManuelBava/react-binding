export default function RadioButton({
  formField,
  id,
  theme,
  text,
  checked,
  onChange,
  name,
}) {
  return (
    <div className={formField}>
      <input
        type="radio"
        id={id}
        name={name}
        className={`radio theme-${theme}`}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{`To ${text} size`}</label>
    </div>
  );
}
