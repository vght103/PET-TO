import { dbService } from "./firebase";

class DataService {
  firstPetData = async () => {
    try {
      const dbPets = await dbService
        .collection("pets-list")
        .orderBy("createAt", "desc")
        .limit(5)
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
      const dbPets = await dbService
        .collection("pets-list")
        .orderBy("createAt", "desc")
        .startAfter(key)
        .limit(5)
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
}
export default DataService;
