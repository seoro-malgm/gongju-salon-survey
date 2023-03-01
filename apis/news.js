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

class newsAPI {
  // news 전체 불러오기
  getAllNews = async (count) => {
    try {
      const col = collection(db, "news");
      const q = count
        ? query(col, orderBy("date", "desc"), limit(count))
        : query(col, orderBy("date", "desc"));
      const snapshot = await getDocs(q);
      if (snapshot) {
        const news = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        return news;
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // news 디테일 불러오기
  getNews = async (id) => {
    try {
      const col = doc(db, "news", id);
      const snapshot = await getDoc(col);
      if (snapshot) {
        return snapshot.data();
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // news 추가
  addNews = async (data) => {
    const docRef = await addDoc(collection(db, "news"), data);
    // console.log('docRef:', docRef)
    if (docRef?.id) {
      return docRef.id;
    }
  };

  // news 삭제
  removeNews = async (id) => {
    if (!id) throw new Error("id가 없습니다");
    await deleteDoc(doc(db, "news", id));
    return true;
  };

  // news 수정
  updateNews = async (id, data) => {
    await setDoc(doc(db, "news", id), data);
    return true;
  };

  // 조회수 추가
  addViewer = async (collection, id) => {
    const ref = doc(db, collection, id);
    const e = await updateDoc(ref, {
      viewer: increment(1),
    });
    // console.log("e:", e);
  };
}

export default new newsAPI();
