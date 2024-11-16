import "./main.css"
import Header from "./components/header/Header"
import Footer from "./components/Footer/Footer"
import AppRoutes from "./routes/AppRoutes"
import {BrowserRouter} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Suspense } from "react"
import Loader from "./components/Loader/Loader"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'

function App() {

  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
      <Header/>
        <Container style={{minHeight: '100vh', minWidth: '100%', padding: '0'}}>
          <Suspense fallback={<Loader/>}>
            <AppRoutes/>
          </Suspense>
        </Container>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
