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

class discussionAPI {
  // 토론 주제 신청
  applyDiscussion = async (data) => {
    const docRef = await addDoc(collection(db, "discussionApply"), data);
    // console.log('docRef:', docRef)
    if (docRef?.id) {
      return docRef.id;
    }
  };
}

export default new discussionAPI();
