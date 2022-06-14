import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/global'

export const imagem = 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaf48237f8531876a/61d8f2c49efff26ae7598104/zeri-splash.jpg'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle imagem={imagem} />
    <App />
  </React.StrictMode>
);
