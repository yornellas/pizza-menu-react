function Pizza({ props }) {
  return (
    <div className="pizza">
      <img src={props.photo} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  )
}

export default Pizza