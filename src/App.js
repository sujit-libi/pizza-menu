import React from 'react';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Company</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza, index) => {
            return (
              <Pizza
                key={index}
                pizzaObj={pizza}
                // <Pizza
                //   name={pizza.name}
                //   price={pizza.price}
                //   soldOut={pizza.soldOut}
                //   ingredients={pizza.ingredients}
                //   pic={pizza.photoName}
              />
            );
          })}
        </ul>
      )} */}

      {numPizzas > 0 ? (
        <>
          <p>
            Authenticate italian cuisine. 6 creative dishes to choose from. All
            from out stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza, index) => {
              return <Pizza key={index} pizzaObj={pizza} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarela, and pepperoni"
        pic="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        pic="pizzas/focaccia.jpg"
        price={6}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(props, 'Value received');
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut && 'sold-out'}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 5;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open!!!!");
  // } else {
  //   alert("Sorry We're closed");
  // }
  console.log(hour, 'Hour');
  // return React.createElement('footer', null, "We're currently open!!!!");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour} and {closeHour}
        </p>
      )}
      {/* {new Date().toLocaleTimeString()}. We're currently open!!!! */}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>We're open until {props.closeHour}. Come visit us or order online!!</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
