import Header from './components/Header.js';
import Main from './components/Main.js';
import Basket from './components/Basket.js';
import data from './data';
import {useState} from 'react';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <div className="App">
      <Header />
      <div className='row'>
        <Main products={products} onAdd={onAdd} ></Main>
        <Basket cartItems={cartItems} onAdd={onAdd} ></Basket>
      </div>

    </div>
  );
}

export default App;
