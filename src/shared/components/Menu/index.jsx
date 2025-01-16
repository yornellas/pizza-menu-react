import Pizza from '../Pizza'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photo: "src/shared/assets/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photo: "src/shared/assets/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photo: "src/shared/assets/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photo: "src/shared/assets/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photo: "src/shared/assets/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photo: "src/shared/assets/pizzas/prosciutto.jpg",
    soldOut: false,
  },
]

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <div className='pizzas'>
        {
          pizzaData.map((pizza, index) =>
            <Pizza key={index} pizzaObject={pizza} />
          )
        }
      </div>
    </main>
  )
}

export default Menu