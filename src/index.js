import React from 'react'
import { store } from './store'
import './index.css'
import './styles.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { SideProvider } from './context/sidebar_context.js'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
import { ModalProvider } from './context/modal_context'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
 <Provider store={store}>
  {/* <Auth0Provider
   domain={process.env.REACT_APP_AUTH_DOMAIN}
   clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
   redirectUri={window.location.origin}
   cacheLocation="localstorage"
  > */}
  <UserProvider>
   <SideProvider>
    <CartProvider>
     <ModalProvider>
      <App />
     </ModalProvider>
    </CartProvider>
   </SideProvider>
  </UserProvider>
  {/* </Auth0Provider> */}
 </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
