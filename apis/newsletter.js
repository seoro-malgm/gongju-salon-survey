import { app } from "~/plugins/appConfig";

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
} from "firebase/firestore";

const db = getFirestore(app);

class newsletterAPI {
  // subscribers 추가
  addSubscribers = async (data) => {
    const docRef = await addDoc(collection(db, "subscribers"), data);
    // console.log('docRef:', docRef)
    if (docRef?.id) {
      return docRef.id;
    }
  };
}

export default new newsletterAPI();
