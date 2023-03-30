import style from './TopBar.module.css'

const TopBar = () => {
  return (
    <div className={style.topBar}>
      <div className="container">
        <ul className={style.menu}>
          <li className={style.menuLink}>все товары</li>
          <li className={style.menuLink}>расширенный поиск</li>
          <li className={style.menuLink}>оплата и доставка</li>
          <li className={style.menuLink}>о магазине</li>
          <li className={style.menuLink}>обратная связь</li>
        </ul>
      </div>
    </div>

  )
}

export default TopBar