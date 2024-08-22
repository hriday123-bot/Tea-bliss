import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assests/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//newly added by me
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import Homescreen from './screen/Homescreen';
import Productscreen from './screen/Productscreen';
import Teabags from './screen/Teabags';
import Teabagscreen from './screen/Teabagscreen';
import {Provider} from 'react-redux';
import store from './store';


//import react rounter

const router=createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} >
      <Route index={true} element={<Homescreen />} />
      <Route path='/data/:id' element={<Productscreen/>}/>
      <Route path='/teabags' element={<Teabags/>}/>
      <Route path='/teabags/:id' element={<Teabagscreen/>}/>
    </Route>
  ])
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
