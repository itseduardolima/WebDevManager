import "../../form/select/style.css";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className="form_control">
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
    </div>
  );
}

export default Select;
