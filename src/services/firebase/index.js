import { firebaseDatabase } from './config'

function load(path, callback, size = 10) {
  let query = firebaseDatabase.ref(path).limitToLast(size)

  query.on('value', dataSnapshot => {
    let items = []
    dataSnapshot.forEach(childSnapshot => {
      let item = childSnapshot.val()
      item['key'] = childSnapshot.key
      items.push(item)
    })
    callback(items)
  })
}

function save(path, data) {
  return firebaseDatabase.ref(path).push(data)
}

function update(path, data, key) {
  return firebaseDatabase.ref(`${path}/${key}`).update(data)
}

function remove(path, key) {
  return firebaseDatabase.ref(`${path}/${key}`).remove()
}

export { save, load, remove, update }
