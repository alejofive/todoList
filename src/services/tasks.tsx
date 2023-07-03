const url = 'http://localhost:3000'

class TaskService {
  getAll = async () => {
    try {
      const res = await fetch(`${url}/tasks`)
      if (!res.ok) {
        throw new Error('Error al cargar los datos')
      }
      const data = await res.json()

      return {
        data: data,
        error: null,
      }
    } catch (error) {
      return {
        data: null,
        error: error,
      }
    }
  }
}

const taskService = new TaskService()
export default taskService
