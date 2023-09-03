import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import textContent from "../data/textContent.json"
import Header from '../layouts/Header'
import Panel from "../layouts/Panel"
import Navbar from "../layouts/Navbar"
import Home from "../pages/Home"
import About from "../pages/About"
import Products from "../pages/Products"
import Contact from "../pages/Contact"
import '../styles/components/App.scss'

export default function App() {

  const { header, navigation } = textContent
  const { home, about, products, contact } = navigation

  return (
    <div className='app'>
      <Router>
        <Panel />
        <Header 
          title={header.title}
        />
        <Navbar />
        <Routes>
          <Route exact path={home.link} element={<Home />} />
          <Route path={about.link} element={<About />} />
          <Route path={products.link} element={<Products />} />
          <Route path={contact.link} element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}


