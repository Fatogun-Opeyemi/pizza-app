import React from 'react'
import { Fragment } from 'react';
import './index.css'
import focaccia from '../src/assets/focaccia.jpg'
import funghi from '../src/assets/funghi.jpg'
import margherita from '../src/assets/margherita.jpg'
import prosciutto from '../src/assets/prosciutto.jpg'
import salamino from '../src/assets/salamino.jpg'
import spinaci from '../src/assets/spinaci.jpg'

const App = () => {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

const Pizza = (props) => {
  console.log(props)
  return (
    <div className='pizza'>
      <img src={props.photoName} alt="pizza spinachi" />
      <div>
        <h2>{props.name} </h2>
        <p> {props.ingredients} </p>
      </div>
      <p>{props.price + 3} </p>
    </div>
  )
}

const Header = () => {
  return <header className='header'>
    <h1> Fast react Pizza Co</h1>
  </header>
}
const Menu = () => {
  return <main className='menu'>
    <h2>Our Menu</h2>
    <Pizza
      name='Pizza Salamino'
      ingredients='Tomato, mozarella, and pepperoni'
      photoName={funghi}
      price={10}
    />

    <Pizza
      name='Focaccia'
      ingredients='Bread with italian olive oil and rosemary'
      photoName={margherita}
      price={6}
    />
    <Pizza
      name='Pizza Salamino'
      ingredients='Tomato, mozarella, and pepperoni'
      photoName={prosciutto}
      price={10}
    />

    <Pizza
      name='Focaccia'
      ingredients='Bread with italian olive oil and rosemary'
      photoName={salamino}
      price={6}
    />
    <Pizza
      name='Pizza Salamino'
      ingredients='Tomato, mozarella, and pepperoni'
      photoName={spinaci}
      price={10}
    />

    <Pizza
      name='Focaccia'
      ingredients='Bread with italian olive oil and rosemary'
      photoName={focaccia}
      price={6}
    />

  </main>
}
const Footer = () => {
  const hour = new Date().getHours();
  console.log(hour)

  const openHours = 8
  const closeHours = 22

  const isOpen = hour >= openHours && hour < closeHours ? 'Open' : 'Close'
  return <footer className='footer'> {new Date().toLocaleTimeString()} we're currently {isOpen} </footer>
}

export default App
