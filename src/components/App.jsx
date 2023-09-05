import { BrowserRouter as Router } from "react-router-dom"
import textContent from "../data/textContent.json"
import Header from '../layouts/Header'
import Panel from "../layouts/Panel"
import Navbar from "../layouts/Navbar"
import Main from "../layouts/Main"
import Footer from "../layouts/Footer"
import '../styles/components/App.scss'

export default function App() {

  const { header, footer } = textContent

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
        <Main />
        <Footer 
          sign={footer.sign}
          link={footer.link}
        />
      </Router>
    </div>
  )
}


