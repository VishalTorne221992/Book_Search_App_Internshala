import Booklist from "./components/Booklist"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import {Provider} from 'react-redux';
import appstore from './utils/appstore.js'

function App() {


  return (
    <>
    <Provider store={appstore}>
      <Header />
      <Outlet />
    </Provider>
    </>
  )
}

export default App
