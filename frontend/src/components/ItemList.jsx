import { deleteItem } from '../api';

export default function ItemList({ items, onRefresh }) {
 const handleDelete = async (id) => {
 await deleteItem(id);
 onRefresh();
 };

 return (
 <div className="item-list-container">
 <h2>Items</h2>
 <div className="items-grid">
 {items.map(item => (
 <div key={item._id} className="item-card">
 <h3>{item.name}</h3>
 <p>{item.description}</p>
 <p><strong>Price: ${item.price}</strong></p>
 <button onClick={() => handleDelete(item._id)}>Delete</button>
 </div>
 ))}
 </div>
 </div>
 );
}
