import { firebaseDatabase } from './config'

class FirebaseDatabase {
  static getDataList = (nodePath, callback, size = 10) => {
    let query = firebaseDatabase.ref(nodePath).limitToLast(size)

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

  static pushData = (node, objToSubmit) => {
    firebaseDatabase.ref(node).push(objToSubmit)
  }

  static remove = (id, node) => {
    firebaseDatabase.ref(`${node}/${id}`).remove()
  }
}

const save = (path, data) => {
  FirebaseDatabase.pushData(path, data)
}
const load = (path, size) => {
  return FirebaseDatabase.getDataList(path, data => data, size)
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

export { save, load, logout, login }

// auth.onAuthStateChanged(user => {
//   if (user) {
//     this.setState({ user })
//   }
// })
