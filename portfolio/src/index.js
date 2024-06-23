import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import About from './components/About';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route>
      <Route path=""  element={<App/>}/>
      <Route path="/about" element={<About/>}/>
    </Route>

    
    </>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


