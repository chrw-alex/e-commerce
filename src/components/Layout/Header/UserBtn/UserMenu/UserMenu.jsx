import style from './UserMenu.module.css'


function UserMenu({ logoutHandler }) {
  return (
    <div className={style.userMenu}>
      <button onClick={logoutHandler}>выйти</button>
    </div>
  )
}

export default UserMenu