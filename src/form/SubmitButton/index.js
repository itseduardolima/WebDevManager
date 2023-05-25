import "../../form/SubmitButton/style.css";

function SubmitButton({ text }) {
  return (
    <div>
      <button className="submitBtn">{text}</button>
    </div>
  );
}

export default SubmitButton;
