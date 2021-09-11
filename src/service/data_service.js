import { firestoreService } from "./firebase";

class DataService {
  // 펫 리스트 데이타

  firstPetData = async () => {
    try {
      const dbPets = await firestoreService
        .collection("pets-list")
        .orderBy("createAt", "desc")
        .limit(10)
        .get();

      let petsArr = [];
      let lastKey = null;

      dbPets.forEach((doc) => {
        petsArr.push({
          id: doc.id,
          ...doc.data(),
        });
        lastKey = doc.data().createAt;
      });

      return { petsArr, lastKey };
    } catch (error) {
      console.log(error);
    }
  };

  nextPetsData = async (key) => {
    try {
      const dbPets = await firestoreService
        .collection("pets-list")
        .orderBy("createAt", "desc")
        .startAfter(key)
        .limit(10)
        .get();

      let petsArr = [];
      let lastKey = null;

      dbPets.forEach((doc) => {
        petsArr.push({
          id: doc.id,
          ...doc.data(),
        });
        lastKey = doc.data().createAt;
      });

      return { petsArr, lastKey };
    } catch (error) {
      console.log(error);
    }
  };

  // 커뮤니티 리스트 데이타
  firstContentsData = async () => {
    try {
      const dbContents = await firestoreService
        .collection("contents-list")
        .orderBy("createdAt", "desc")
        .limit(10)
        .get();

      let contentsArr = [];
      let lastKey = null;

      dbContents.forEach((doc) => {
        contentsArr.push({
          id: doc.id,
          ...doc.data(),
        });
        lastKey = doc.data().createdAt;
      });
      return { contentsArr, lastKey };
    } catch (error) {
      console.log(error);
    }
  };

  nextContentsData = async (key) => {
    try {
      const dbContents = await firestoreService
        .collection("contents-list")
        .orderBy("createdAt", "desc")
        .startAfter(key)
        .limit(10)
        .get();

      let contentsArr = [];
      let lastKey = null;

      dbContents.forEach((doc) => {
        contentsArr.push({
          id: doc.id,
          ...doc.data(),
        });
        lastKey = doc.data().createdAt;
      });
      return { contentsArr, lastKey };
    } catch (error) {
      console.log(error);
    }
  };
}
export default DataService;
