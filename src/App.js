import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Laptop', price: 120000 },
    { name: 'Phone', price: 75000 },
    { name: 'tablet', price: 35000 },
    { name: 'watch', price: 10000 }
  ];
  return (
    <div className="App">
      {/* <Product name='laptop' price='45000'></Product>
      <Product name='phone' price='75000'></Product> */}
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
};

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default App;
