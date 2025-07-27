// toastUtils.js or toastUtils.ts
import { toast, Slide } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const successToast = (message = 'success') =>
  toast.success(message, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
  });

export const errorToast = (message = 'error') =>
  toast.error(message, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
  });


    
    // <ToastContainer
    // position="bottom-right"
    // autoClose={1000}
    // hideProgressBar={false}
    // newestOnTop={false}
    // closeOnClick={true}
    // rtl={false}
    // pauseOnFocusLoss
    // draggable
    // pauseOnHover
    // theme="dark"
    // transition={Slide}
    // />



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [editId, setEditId] = useState(null);
//   // Use an object to store all editable fields
//   const [editData, setEditData] = useState({ name: '', email: '', age: '' });

//   // Fetch items on mount
//   useEffect(() => {
//     axios.get('http://your-laravel-api-url/api/items')
//       .then(res => setItems(res.data))
//       .catch(console.error);
//   }, []);

//   // Start editing, fill editData with the selected item values
//   const startEdit = (item) => {
//     setEditId(item.id);
//     setEditData({ name: item.name, email: item.email, age: item.age });
//   };

//   // Handle input changes for all fields
//   const handleChange = (e) => {
//     setEditData({
//       ...editData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Save edited data
//   const saveEdit = () => {
//     axios.put(`http://your-laravel-api-url/api/items/${editId}`, editData)
//       .then(res => {
//         setItems(items.map(item => (item.id === editId ? res.data : item)));
//         setEditId(null);
//         setEditData({ name: '', email: '', age: '' });
//       })
//       .catch(console.error);
//   };

//   return (
//     <table border="1" cellPadding="5">
//       <thead>
//         <tr><th>ID</th><th>Name</th><th>Email</th><th>Age</th><th>Action</th></tr>
//       </thead>
//       <tbody>
//         {items.map(item => (
//           <tr key={item.id}>
//             <td>{item.id}</td>

//             <td>
//               {editId === item.id ? (
//                 <input
//                   name="name"
//                   value={editData.name}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 item.name
//               )}
//             </td>

//             <td>
//               {editId === item.id ? (
//                 <input
//                   name="email"
//                   value={editData.email}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 item.email
//               )}
//             </td>

//             <td>
//               {editId === item.id ? (
//                 <input
//                   name="age"
//                   value={editData.age}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 item.age
//               )}
//             </td>

//             <td>
//               {editId === item.id ? (
//                 <button onClick={saveEdit}>Save</button>
//               ) : (
//                 <button onClick={() => startEdit(item)}>Edit</button>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default App;
