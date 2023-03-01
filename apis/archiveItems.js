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
  where,
} from "firebase/firestore";

const db = getFirestore(app);

class archiveItemsAPI {
  // archiveItem 전체 불러오기
  getAllArchiveItems = async (category, count) => {
    try {
      const queryConstraints = [];
      if (category) queryConstraints.push(where("category", "==", category));
      if (count) queryConstraints.push(limit(count));
      queryConstraints.push(orderBy("createdAt", "desc"));

      // 최종 쿼리
      const q = query(collection(db, "archiveItems"), ...queryConstraints);
      // console.log("q:", queryConstraints);
      const snapshot = await getDocs(q);
      if (snapshot) {
        const archiveItems = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        return archiveItems;
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // archiveItem 디테일 불러오기
  getArchiveItem = async (id) => {
    try {
      const col = doc(db, "archiveItems", id);
      const snapshot = await getDoc(col);
      if (snapshot) {
        return snapshot.data();
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // archiveItem 추가
  addArchiveItem = async (data) => {
    const docRef = await addDoc(collection(db, "archiveItems"), data);
    // console.log('docRef:', docRef)
    if (docRef?.id) {
      return docRef.id;
    }
  };

  // archiveItem 삭제
  removeArchiveItem = async (id) => {
    if (!id) throw new Error("id가 없습니다");
    await deleteDoc(doc(db, "archiveItems", id));
    return true;
  };

  // archiveItem 수정
  updateArchiveItem = async (id, data) => {
    await setDoc(doc(db, "archiveItems", id), data);
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

  // 좋아요 추가
  addLike = async (collection, id) => {
    const ref = doc(db, collection, id);
    const e = await updateDoc(ref, {
      like: increment(1),
    });
    // console.log("e:", e);
  };
}

export default new archiveItemsAPI();
