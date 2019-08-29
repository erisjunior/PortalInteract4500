const setStorage = async (key, data) => {
  const stringifiedData = JSON.stringify(data)
  await localStorage.setItem(key, stringifiedData)
}

const getStorage = async key => {
  const data = await localStorage.getItem(key)

  if (!data) return null

  return JSON.parse(data)
}

const clearStorage = async key => {
  await localStorage.removeItem(key)
}

export { setStorage, getStorage, clearStorage }
