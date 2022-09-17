import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { store, persistStr } from './app/store';
import { PersistGate } from 'redux-persist/integration/react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
const App = lazy(() => import('./App'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStr}>
        <BrowserRouter>
        < Navbar />
        <Suspense fallback={'laoding...'}>
          <App />
        </Suspense>
        <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
