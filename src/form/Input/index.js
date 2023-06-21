import { FormControl } from "./style";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <FormControl>
      <label htmlFor={name}>{text}:</label>
      <input
        required
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </FormControl>
  );
}

export default Input;
