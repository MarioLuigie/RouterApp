import { createContext, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { PropTypes } from "prop-types"

export const Context = createContext();

export default function Provider ({ children }) {

    const isMobile = useMediaQuery({ maxWidth : 770 })
    const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false)

    const providerValue = {
        isMobile,
        isMenuBtnClicked,
        setIsMenuBtnClicked,
    }

    return (
        <Context.Provider value={providerValue}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
    children : PropTypes.node,
}