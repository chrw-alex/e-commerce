import { Link } from 'react-router-dom'
import style from './UserMenu.module.css'


function UserMenu({ logoutHandler }) {
  return (
    <div className={style.userMenu}>
      <Link to='/personal' className={style.link}>
        <p>Личные данные</p>
      </Link>
      <div className={style.btnInner}>
        <button onClick={logoutHandler}>выйти</button>
      </div>
    </div>
  )
}

export default UserMenu