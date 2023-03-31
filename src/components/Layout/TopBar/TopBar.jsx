import { NavLink } from 'react-router-dom'
import style from './TopBar.module.css'

const TopBar = () => {
  return (
    <div className={style.topBar}>
      <div className='container'>
        <ul className={style.menu}>
          <NavLink to='/products' className={({ isActive }) => (isActive ? style.active : style.link)}>
            <li className={style.menuLink}>все товары</li>
          </NavLink>
          <NavLink to='/search' className={({ isActive }) => (isActive ? style.active : style.link)}>
            <li className={style.menuLink}>расширенный поиск</li>
          </NavLink>
          <NavLink to='/payment' className={({ isActive }) => (isActive ? style.active : style.link)}>
            <li className={style.menuLink}>оплата и доставка</li>
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => (isActive ? style.active : style.link)}>
            <li className={style.menuLink}>о магазине</li>
          </NavLink>
          <NavLink to='/feedback' className={({ isActive }) => (isActive ? style.active : style.link)}>
            <li className={style.menuLink}>обратная связь</li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default TopBar