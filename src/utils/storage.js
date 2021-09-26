export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}

export const getItem = key => {
  return JSON.parse(window.sessionStorage.getItem(key))
}

export const removeItem = key => {
  window.sessionStorage.removeItem(key)
}
