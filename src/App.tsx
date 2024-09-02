import { useState, useEffect } from 'react';
import { ProductList } from './Components/ProductList';
import itemList from './Assets/random_products_175.json';
import './e-commerce-stylesheet.css';

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  rating: number;
  image_link: string;
};

type BasketItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchedProducts, setSearchedProducts] = useState<Product[]>(itemList);
  const [resultCount, setResultCount] = useState<number>(itemList.length);
  const [sortOption, setSortOption] = useState<string>('AtoZ');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [basket, setBasket] = useState<BasketItem[]>([]);

  // ===== Hooks =====
  useEffect(() => updateSearchedProducts(), [searchTerm, sortOption, inStockOnly]);

  // ===== Basket management =====
  function showBasket() {
    let areaObject = document.getElementById('shopping-area');
    if (areaObject !== null) {
      areaObject.style.display = 'block';
    }
  }

  function hideBasket() {
    let areaObject = document.getElementById('shopping-area');
    if (areaObject !== null) {
      areaObject.style.display = 'none';
    }
  }

  function addToBasket(product: Product) {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((item) => item.id === product.id);
      if (existingItem) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevBasket,
          { id: product.id, name: product.name, price: product.price, quantity: 1 },
        ];
      }
    });
  }

  function removeFromBasket(productId: number) {
    setBasket((prevBasket) => {
      return prevBasket
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  }

  function calculateTotalCost() {
    return basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }

  // ===== Search and Sort =====
  function updateSearchedProducts() {
    let holderList: Product[] = itemList;

    // Filter based on search term
    let filteredProducts = holderList.filter((product: Product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filter based on stock availability
    if (inStockOnly) {
      filteredProducts = filteredProducts.filter((product) => product.quantity > 0);
    }

    // Sort based on the selected option
    switch (sortOption) {
      case 'AtoZ':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'ZtoA':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case '£LtoH':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case '£HtoL':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case '*LtoH':
        filteredProducts.sort((a, b) => a.rating - b.rating);
        break;
      case '*HtoL':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setSearchedProducts(filteredProducts);
    setResultCount(filteredProducts.length);
  }

  // ===== Results Indicator Text =====
  const getResultIndicatorText = () => {
    if (searchTerm === '') {
      return resultCount === 1 ? '1 Product' : `${resultCount} Products`;
    } else {
      if (resultCount === 0) {
        return 'No search results found';
      } else if (resultCount === 1) {
        return '1 Result';
      } else {
        return `${resultCount} Results`;
      }
    }
  };

  return (
    <div id="container">
      <div id="logo-bar">
        <div id="logo-area">
          <img src="./src/assets/logo.png" alt="Logo" />
        </div>
        <div id="shopping-icon-area">
          <img id="shopping-icon" onClick={showBasket} src="./src/assets/shopping-basket.png" alt="Shopping Basket" />
        </div>
        <div id="shopping-area">
          <div id="exit-area">
            <p id="exit-icon" onClick={hideBasket}>x</p>
          </div>
          {basket.length === 0 ? (
            <p>Your basket is empty</p>
          ) : (
            <div>
              {basket.map((item) => (
                <div key={item.id} className="shopping-row">
                  <div className="shopping-information">
                    <p>
                      {item.name} (£{item.price.toFixed(2)}) - {item.quantity}
                    </p>
                  </div>
                  <button onClick={() => removeFromBasket(item.id)}>Remove</button>
                </div>
              ))}
              <p>Total: £{calculateTotalCost()}</p>
            </div>
          )}
        </div>
      </div>
      <div id="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(changeEventObject) => setSearchTerm(changeEventObject.target.value)}
        />
        <div id="control-area">
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="AtoZ">By name (A - Z)</option>
            <option value="ZtoA">By name (Z - A)</option>
            <option value="£LtoH">By price (low - high)</option>
            <option value="£HtoL">By price (high - low)</option>
            <option value="*LtoH">By rating (low - high)</option>
            <option value="*HtoL">By rating (high - low)</option>
          </select>
          <input
            id="inStock"
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          <label htmlFor="inStock">In stock</label>
        </div>
      </div>
      <p id="results-indicator">{getResultIndicatorText()}</p>
      <ProductList itemList={searchedProducts} addToBasket={addToBasket} />
    </div>
  );
}

export default App;
