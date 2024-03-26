import { UsersInterface } from '@/interfaces/user.interface';

export const UsersServices = {
  async getUsers(): Promise<UsersInterface[]> {
    return await fetch('http://localhost:8000/users')
      .then(response => response.json())
  },

  async deleteUser(id: string) {
    return await fetch(`http://localhost:8000/users/${id}`, { method: 'DELETE' })
  },

  async createUser(data: UsersInterface) {
    return await fetch(`http://localhost:8000/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  },


  async updateUser(data: UsersInterface, id: string) {
    return await fetch(`http://localhost:8000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  },

}