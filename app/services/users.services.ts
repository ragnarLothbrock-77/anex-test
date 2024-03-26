import { UsersInterface } from '@/interfaces/user.interface';

export const UsersServices = {
  async getUsers(): Promise<UsersInterface[]> {
    try {
      return await fetch('http://localhost:8000/users')
        .then(response => response.json());
    } catch (error) {
      throw error;
    }
  },

  async deleteUser(id: string) {
    try {
      return await fetch(`http://localhost:8000/users/${id}`, { method: 'DELETE' })
    } catch (error) {
      throw error;
    }
  },

  async createUser(data: UsersInterface) {
    try {
      return await fetch(`http://localhost:8000/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    } catch (error) {
      throw error;
    }
  },


  async updateUser(data: UsersInterface, id: string) {
    try {
      return await fetch(`http://localhost:8000/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    } catch (error) {
      throw error;
    }
  }
}