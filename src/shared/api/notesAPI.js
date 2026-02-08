const URL = 'http://localhost:3001/notes'

const headers = {
  'Content-type': 'application/json',
}

const noteApi = {
  getAll: () => {
    return fetch(URL).then((response) => response.json())
  },

  getById: (id) => {
    return fetch(`${URL}/${id}`)
      .then((response) => response.json())
  },

  Add: (note) => {
    return fetch(URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(note),
    }).then((response) => response.json())
  },

  Delete: (id) => {
    return fetch(`${URL}/${id}`, { method: 'DELETE' })
  },

  ToggleComplete: (id, field) => {
    return fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(field),
    })
  },
  saveDescription: async (id, description) => {
    const response = await fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({Description: description})
    })

    if(!response.ok) {
      throw new Error('Failed save description!')
    }

    return response.json()
  }
}

export default noteApi
