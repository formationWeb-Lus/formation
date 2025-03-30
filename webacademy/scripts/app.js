// Importation des modules Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDzMpVFXdYEQ_4ch3GthMvF52hIRce9qD8",
    authDomain: "inscriptionapp-ddb3e.firebaseapp.com",
    projectId: "inscriptionapp-ddb3e",
    storageBucket: "inscriptionapp-ddb3e.firebasestorage.app",
    messagingSenderId: "213159898520",
    appId: "1:213159898520:web:a986ee20ed1762b4e58fed"
};
// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fonction pour supprimer toutes les inscriptions
async function supprimerInscriptions() {
  const querySnapshot = await getDocs(collection(db, "inscriptions"));
  querySnapshot.forEach(async (document) => {
    await deleteDoc(doc(db, "inscriptions", document.id));
    console.log(`Document ${document.id} supprimé.`);
  });
}

// Ajouter un bouton dans ton HTML pour exécuter la suppression
document.getElementById("delete-btn").addEventListener("click", () => {
  if (confirm("Voulez-vous vraiment supprimer toutes les inscriptions ?")) {
    supprimerInscriptions();
  }
});
