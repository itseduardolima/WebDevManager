function ViewModal({ name, cost, description }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>
        <span>Custo utilizado:</span> R${cost}
      </p>
      <p>{description}</p>
    </div>
  );
}

export default ViewModal;
