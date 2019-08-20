import { firebaseDatabase } from './config'

function save(path, data) {
  return firebaseDatabase.ref(path).push(data)
}

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

function remove(id, node) {
  return firebaseDatabase.ref(`${node}/${id}`).remove()
}

const login = () => {
  // auth.signInWithPopup(googleProvider).then(result => {
  //   const { user } = result
  //   this.setState({ user })
  // })
}

const logout = () => {
  // auth.signOut().then(() => {
  //   this.setState({ user: null })
  // })
}

export { save, load, remove, logout, login }

// auth.onAuthStateChanged(user => {
//   if (user) {
//     this.setState({ user })
//   }
// })
