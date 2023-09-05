import { useContext } from "react"
import { Context } from "../Context/Context"
import "../styles/components/MenuButton.scss"

export default function MenuButton () {

  const style = "child"
  const { isMenuBtnClicked, setIsMenuBtnClicked } = useContext(Context)

  const handleOpenMenu = () => {
    console.log("state of MenuButtonClicked" ,isMenuBtnClicked);
    setIsMenuBtnClicked(prev => (
      // eslint-disable-next-line no-unused-vars
      prev = !isMenuBtnClicked
    ))
  }

  return (
    <div className={`${isMenuBtnClicked ? "menuBtnWrapper isMenuBtnClicked" : "menuBtnWrapper"}`} onClick={handleOpenMenu}>
      <div className={style}></div>
      <div className={style}></div>
      <div className={style}></div>
    </div>
  )
}