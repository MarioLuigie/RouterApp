import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import textContent from "../data/textContent.json"
import Header from '../layouts/Header'
import Panel from "../layouts/Panel"
import Navbar from "../layouts/Navbar"
import Home from "../pages/Home"
import About from "../pages/About"
import Gallery from "../pages/Gallery"
import Store from "../pages/Store"
import Contact from "../pages/Contact"
import Footer from "../layouts/Footer"
import '../styles/components/App.scss'

export default function App() {

  const { header, navigation, footer } = textContent
  const { home, about, gallery, store, contact } = navigation

  return (
    <div className='app'>
      <Router>
        <Panel />
        <Header 
          title={header.title}
          subtitle01={header.subtitle01}
          subtitle02={header.subtitle02}
          button={header.button}
        />
        <Navbar />
        <Routes>
          <Route exact path={home.path} element={<Home />} />
          <Route path={about.path} element={<About />} />
          <Route path={gallery.path} element={<Gallery />} />
          <Route path={store.path} element={<Store />} />
          <Route path={contact.path} element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer 
          sign={footer.sign}
          link={footer.link}
        />
      </Router>
    </div>
  )
}


