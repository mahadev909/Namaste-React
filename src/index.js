import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLayout from './App';
import reportWebVitals from './reportWebVitals';
import About from "./components/About";
import Contact from './components/Contact';
import Error from './components/Error';
import Body from "./components/Body";
import RestaurantMenu from './components/RestaurantMenu';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
