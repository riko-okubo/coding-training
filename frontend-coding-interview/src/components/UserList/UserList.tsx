// Data Source
import { users } from '../../data/users'
import { User, getUsers } from '../../data/getUsers'

// CSS Modules
import styles from './UserList.module.css'
// styled-components
import styled from 'styled-components'
import { useEffect, useState } from 'react'

type Props = {
  clicked: string
  setClicked: React.Dispatch<React.SetStateAction<string>>
}

const UserList = ({ clicked, setClicked }: Props) => {
  const [users, setUsers] = useState<User[]>()
  useEffect(() => {
    const getRes = async () => {
      const res = await getUsers()
      setUsers(res)
    }
    getRes()
  })

  const handleClick = (id) => {
    setClicked(id)
  }

  return (
    <ul>
      {users?.map((user) => (
        <li className={styles.userList} onClick={() => handleClick(user.id)}>
          <img className={styles.icon} src={user.picture}></img>
          <div className={styles.name}>{user.name}</div>
          <div className={styles.email}>{user.email}</div>
          {clicked == user.id ? 'クリックされました！' : ''}
        </li>
      ))}
    </ul>
  )
}

export { UserList }
