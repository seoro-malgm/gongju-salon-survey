import storageAPI from '~/apis/storage'
import firestoreAPI from '~/apis/firestore'

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('firebase', {
    storageAPI,
    firestoreAPI,
  })
}
