import firebaseApp from "./firebase";

class PetDatabase {
  uploadPet(userId, pet) {
    firebaseApp.database().ref(`${userId}/pets/${pet.id}`.set(pet));
  }
}
export default PetDatabase;
