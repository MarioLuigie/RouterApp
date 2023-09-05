import "../styles/components/MenuButton.scss"

export default function MenuButton () {
  const style = "child"
  return (
    <div className="menuBtnWrapper">
      <div className={style}></div>
      <div className={style}></div>
      <div className={style}></div>
    </div>
  )
}