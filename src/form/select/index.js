import "./style.js";
import { FormControl } from "./style.js";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <FormControl>
      <label htmlFor={name}>{text}:</label>
      <select
        required
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
        {options.map((options) => (
          <option value={options.id} key={options.id}>
            {options.name}
          </option>
        ))}
      </select>
    </FormControl>
  );
}

export default Select;
