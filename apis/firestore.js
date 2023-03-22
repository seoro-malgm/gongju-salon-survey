import { app } from '~/plugins/appConfig'

// firestore
import {
  getFirestore,
  doc,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  collection,
  query,
  orderBy,
  updateDoc,
  increment,
  limit,
  where,
} from 'firebase/firestore'

const db = getFirestore(app)

class firestoreAPI {
  // 아이템 전체 불러오기
  getItems = async (collectionName, category, count) => {
    try {
      const queryConstraints = []
      if (category) queryConstraints.push(where('category', '==', category))
      if (count) queryConstraints.push(limit(count))
      queryConstraints.push(orderBy('createdAt', 'desc'))

      // 최종 쿼리
      const q = query(collection(db, collectionName), ...queryConstraints)
      // console.log("q:", queryConstraints);
      const snapshot = await getDocs(q)
      if (snapshot) {
        const firestore = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })

        return firestore
      }
    } catch (error) {
      console.error('error::', error)
    }
  }

  // 단일 아이템  불러오기
  getItem = async (collectionName, id) => {
    try {
      const col = doc(db, collectionName, id)
      const snapshot = await getDoc(col)
      if (snapshot) {
        return snapshot.data()
      }
    } catch (error) {
      console.error('error::', error)
    }
  }

  // 아이템 추가
  addItem = async (collectionName, data) => {
    const docRef = await addDoc(collection(db, collectionName), data)
    // console.log('docRef:', docRef)
    if (docRef?.id) {
      return docRef.id
    }
  }

  // 아이템 삭제
  removeItem = async (collectionName, id) => {
    if (!id) throw new Error('id가 없습니다')
    await deleteDoc(doc(db, collectionName, id))
    return true
  }

  // item 수정
  updateItem = async (collectionName, id, data) => {
    await setDoc(doc(db, collectionName, id), data)
    return true
  }

  // 조회수 추가
  addViewer = async (collection, id) => {
    const ref = doc(db, collection, id)
    const e = await updateDoc(ref, {
      viewer: increment(1),
    })
    // console.log("e:", e);
  }

  // 좋아요 추가
  addLike = async (collection, id) => {
    const ref = doc(db, collection, id)
    const e = await updateDoc(ref, {
      like: increment(1),
    })
    // console.log("e:", e);
  }
}

export default new firestoreAPI()
