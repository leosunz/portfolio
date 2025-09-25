import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Navbar,Works} from './components'
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <Navbar/>
        <About/>
        {/* <Experience/> */}
        {/* <Works/> */}
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
