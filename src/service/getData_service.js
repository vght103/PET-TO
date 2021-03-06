import { firestoreService } from "./firebase";

class GetDataService {
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
        .limit(6)
        .get();

      let contentsArr = [];
      let lastKey = null;
      // let dateTime = null;

      dbContents.forEach((doc) => {
        contentsArr.push({
          id: doc.id,
          ...doc.data(),
        });

        lastKey = doc.data().createdAt;
        // dateTime = doc.data().createdTime;
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
        .limit(6)
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

  // 신청서 리스트 데이터
  firstApplicationData = async () => {
    try {
      const dbApplication = await firestoreService
        .collection("application-list")
        .orderBy("createdAt", "desc")
        .limit(6)
        .get();

      let applicationArr = [];
      let lastKey = null;

      dbApplication.forEach((doc) => {
        applicationArr.push({
          id: doc.id,
          ...doc.data(),
        });
        lastKey = doc.data().createdAt;
      });
      return { applicationArr, lastKey };
    } catch (error) {
      console.log(error);
    }
  };

  nextApplicationData = async (key) => {
    try {
      const dbApplication = await firestoreService
        .collection("application-list")
        .orderBy("createdAt", "desc")
        .startAfter(key)
        .limit(6)
        .get();

      let applicationArr = [];
      let lastKey = null;

      dbApplication.forEach((doc) => {
        applicationArr.push({
          id: doc.id,
          ...doc.data(),
        });
        lastKey = doc.data().createdAt;
      });
      console.log(lastKey);
      console.log(applicationArr);
      return { applicationArr, lastKey };
    } catch (error) {
      console.log(error);
    }
  };

  // 검색 데이터
  searchData = async (key) => {
    try {
      let searchValue = key;
      let searchArray = [];

      const dbSearch = await firestoreService //
        .collection("pets-list")
        .where("breed", "in", [searchValue])
        .get();

      dbSearch.forEach((doc) => {
        searchArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return { searchArray, searchValue };
    } catch (error) {
      console.log(error);
    }
  };
}
export default GetDataService;
