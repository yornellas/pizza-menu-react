function Pizza({ pizzaObject }) {
  return (
    <div className={`pizza ${pizzaObject.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObject.photo} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span> {pizzaObject.soldOut ? 'SOLD OUT' : pizzaObject.price}</span>
      </div>
    </div>
  )
}

export default Pizza
