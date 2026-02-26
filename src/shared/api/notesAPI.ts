const URL = import.meta.env.VITE_API_URL

const headers = {
  'Content-type': 'application/json',
}

const noteApi = {
  getAll: () => {
    return fetch(URL).then((response) => {return response.json()})
  },

  getById: (id: string) => {
    return fetch(`${URL}/${id}`)
      .then((response) => response.json())
  },

  Add: (note: object) => {
    return fetch(URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(note),
    }).then((response) => response.json())
  },

  Delete: (id: string) => {
    return fetch(`${URL}/${id}`, { method: 'DELETE' })
  },

  ToggleComplete: (id: string, field: string) => {
    return fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(field),
    })
  },
  saveDescription: async (id: string, description: string) => {
    const response = await fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ Description: description })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  }
}

export default noteApi
