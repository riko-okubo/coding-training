import { users } from './users'

export type User = {
  id: string
  name: string
  email: string
  picture: string
  age: number
  bloodType: string
}

export const getUsers = () => {
  return new Promise<User[]>((resolve) => {
    setTimeout(() => resolve(users), 1000)
  })
}
