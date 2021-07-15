import { API } from '../config';
//import queryString from 'query-string'

  //--  Leer productos y mostrarlos en su respectiva pagina junto con su ID

export const read = (foodId) => {
  return fetch(`${API}/food/${foodId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

export const readbook = (bookId) => {
  return fetch(`${API}/book/${bookId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

export const readfashionwoman = (fashionWomanId) => {
  return fetch(`${API}/fashionWoman/${fashionWomanId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

export const readfashionmen = (fashionMenId) => {
  return fetch(`${API}/fashionMen/${fashionMenId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

export const readfitnes = (fitId) => {
  return fetch(`${API}/fit/${fitId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

export const readlaptop = (laptopId) => {
  return fetch(`${API}/laptop/${laptopId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

export const readsmartphone = (smartphoneId) => {
  return fetch(`${API}/smartphone/${smartphoneId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

export const readelectronic = (electronicId) => {
  return fetch(`${API}/electronic/${electronicId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

export const readother = (otherId) => {
  return fetch(`${API}/other/${otherId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

export const readproduct = (productId) => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

  //--   Formulario de Login / Signin / Logout

export const signin = user => {
  return fetch(`${API}/auth/signin`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user) // user: 
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const signup = user => {
  return fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
}

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    next();
    return fetch(`${API}/auth/signout`, {
      method: 'GET',
    })
      .then(response => {
        console.log('signout', response);
      })
      .catch(err => console.log(err));
  }
}

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
    // return localStorage.getItem('jwt')
  }
  return false;
}

  //--  Creación de productos y/o nuevas categorias 

export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category) // Convierte objetos de JS a json
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}

export const getCategories = () => {
  return fetch(`${API}/category/categories`, {  // Queremos la lista de las categorias
    method: 'GET'
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
  }

  export const getProducts = () => {
    return fetch(`${API}/product/products`, {  // Queremos la lista de los productos
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
    }

  // ${userId}
export const createFood = (userId, token, food) => {
  return fetch(`${API}/food/create/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: food
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateFood = (userId, token, food) => {
  return fetch(`${API}/food/edit/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: food
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}

  export const createFashionWoman = (userId, token, fashionWoman) => {
    return fetch(`${API}/fashionWoman/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: fashionWoman
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const createFashionMen = (userId, token, fashionMen) => {
    return fetch(`${API}/fashionMen/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: fashionMen
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const createFit = (userId, token, fitnes) => {
    return fetch(`${API}/fit/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: fitnes
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const createBook = (userId, token, book) => {
    return fetch(`${API}/book/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: book
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const createOther = (userId, token, other) => {
    return fetch(`${API}/other/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: other
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const createLaptop = (userId, token, laptop) => {
    return fetch(`${API}/laptop/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: laptop
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const createSmartphone = (userId, token, smartphone) => {
    return fetch(`${API}/smartphone/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: smartphone
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const createElectronic = (userId, token, electronic) => {
    return fetch(`${API}/electronic/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: electronic
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
    }

 //--  Eliminar productos almacenados en el inventario

 export const remove = (foodId) => {
  return fetch(`${API}/food/${foodId}`, {
    method: "DELETE"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}    

export const removeBook = (bookId) => {
  return fetch(`${API}/book/${bookId}`, {
    method: "DELETE"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}    

export const removeFashionWoman = (fashionWomanId) => {
  return fetch(`${API}/fashionWoman/${fashionWomanId}`, {
    method: "DELETE"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}  

export const removeFashionMen = (fashionMenId) => {
  return fetch(`${API}/fashionMen/${fashionMenId}`, {
    method: "DELETE"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}  

export const removeFit = (fitId) => {
  return fetch(`${API}/fit/${fitId}`, {
    method: "DELETE"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}  

export const removeSmartphone = (smartphoneId) => {
  return fetch(`${API}/smartphone/${smartphoneId}`, {
    method: "DELETE"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}  

export const removeLaptop = (laptopId) => {
  return fetch(`${API}/laptop/${laptopId}`, {
    method: "DELETE"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}  

export const removeElectronic = (electronicId) => {
  return fetch(`${API}/electronic/${electronicId}`, {
    method: "DELETE"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}  

export const removeOther = (otherId) => {
  return fetch(`${API}/other/${otherId}`, {
    method: "DELETE"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}  

/*  Food apiCore   */

  export const getFoods = () => {
    return fetch(
      `${API}/food/foods`,
      {
        method: 'GET'
      }
    )
      .then(response => {
        console.log(response)
        return response.json()
      })
      .catch(err => console.log(err))
  }
  

/*  FashionWoman apiCore   */

export const getFashionWomans = () => {
  return fetch(
    `${API}/fashionWoman/fashionWomans`,
    {
      method: 'GET'
    }
  )
    .then(response => {
      console.log(response)
      return response.json()
    })
    .catch(err => console.log(err))
}

/*  FashionMen apiCore   */

export const getFashionMens = () => {
  return fetch(
    `${API}/fashionMen/fashionMens`,
    {
      method: 'GET'
    }
  )
    .then(response => {
      console.log(response)
      return response.json()
    })
    .catch(err => console.log(err))
}

/*  Fitness apiCore   */

export const getFitness = () => {
  return fetch(
    `${API}/fit/fitness`,
    {
      method: 'GET'
    }
  )
    .then(response => {
      console.log(response)
      return response.json()
    })
    .catch(err => console.log(err))
}

/*  Laptops apiCore   */

export const getLaptops = () => {
  return fetch(
    `${API}/laptop/laptops`,
    {
      method: 'GET'
    }
  )
    .then(response => {
      console.log(response)
      return response.json()
    })
    .catch(err => console.log(err))
}

/*  Smartphones apiCore   */

export const getSmartphones = () => {
  return fetch(
    `${API}/smartphone/smartphones`,
    {
      method: 'GET'
    }
  )
    .then(response => {
      console.log(response)
      return response.json()
    })
    .catch(err => console.log(err))
}

/*  Electronics apiCore   */

export const getElectronics = () => {
  return fetch(
    `${API}/electronic/electronics`,
    {
      method: 'GET'
    }
  )
    .then(response => {
      console.log(response)
      return response.json()
    })
    .catch(err => console.log(err))
}

/*  Books apiCore   */

export const getBooks = () => {
  return fetch(
    `${API}/book/books`,
    {
      method: 'GET'
    }
  )
    .then(response => {
      console.log(response)
      return response.json()
    })
    .catch(err => console.log(err))
}

/*  Others apiCore   */

export const getOthers = () => {
  return fetch(
    `${API}/other/others`,
    {
      method: 'GET'
    }
  )
    .then(response => {
      console.log(response)
      return response.json()
    })
    .catch(err => console.log(err))
}