import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className='App'>
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
};

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h1>External Users</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
};

function User(props) {
  return (
    <div style={{border:'3px solid tomato', margin:'10px', backgroundColor:'skyblue', borderRadius:'10px'}}>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }

  return (
    <div >
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase </button>
      <br />
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};

/*
 function App() {
  const products = [
    { name: 'Laptop', price: 120000 },
    { name: 'Phone', price: 75000 },
    { name: 'tablet', price: 35000 },
    { name: 'watch', price: 10000 }
  ];
  return (
    <div className="App">
      <Product name='laptop' price='45000'></Product>
      <Product name='phone' price='75000'></Product>
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
}; 
*/

/* function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}; */

export default App;
