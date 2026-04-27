import { useEffect, useState } from 'react';
import { getItems } from './api';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import './index.css';

function App() {
  const [items, setItems] = useState([]);
  
  const fetchItems = async () => {
    try {
      const res = await getItems();
      setItems(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <main>
        <nav>
          <div className="nav-brand">Item Manager</div>
          <div className="nav-links">
            <a href="#">MERN Item Manager</a>
          </div>
        </nav>

        <div className="app-container">
          <div className="header-section">
            <h1>Item Manager</h1>
          </div>
          
          <div className="content-section">
            <div className="form-wrapper">
              <ItemForm onItemAdded={fetchItems} />
            </div>
            <div className="list-wrapper">
              <ItemList items={items} onRefresh={fetchItems} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;