import { useState } from 'react'
import { UserList } from '../UserList/UserList'

import styles from './FriendRequestForm.module.css'

const FriendRequestForm = () => {
  const [clicked, setClicked] = useState('')

  const handleSubmit = (e) => {
    console.log(clicked)
    e.preventDefault()
  }
  return (
    <form className={styles.wrapper} onSubmit={(e) => handleSubmit(e)}>
      <h2 className={styles.header}>友達リクエストの送信先を選択してください</h2>

      <UserList clicked={clicked} setClicked={setClicked} />

      <div className={styles.buttonWrapper}>
        <button type="submit" className={styles.button}>
          送信
        </button>
      </div>
    </form>
  )
}

export { FriendRequestForm }
