import { Routes, Route } from "react-router-dom"
import textContent from "../data/textContent.json"
import Home from "../pages/Home"
import About from "../pages/About"
import Gallery from "../pages/Gallery"
import Store from "../pages/Store"
import Contact from "../pages/Contact"

export default function Main () {

    const { navigation: { home, about, gallery, store, contact } } = textContent


    return (
        <main>
            <Routes>
                <Route exact path={home.path} element={<Home />} />
                <Route path={about.path} element={<About />} />
                <Route path={gallery.path} element={<Gallery />} />
                <Route path={store.path} element={<Store />} />
                <Route path={contact.path} element={<Contact />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </main>
    )
}