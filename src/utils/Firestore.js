import { getFirestore, collection, where, query, doc, setDoc, 
  updateDoc, arrayUnion, arrayRemove, getDocs, getDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYmVmrGXIZwpJ7umua9rye0A2Us2XaKB4",
  authDomain: "boiler-library.firebaseapp.com",
  projectId: "boiler-library",
  storageBucket: "boiler-library.appspot.com",
  messagingSenderId: "127846507087",
  appId: "1:127846507087:web:ef7889687213128a4ac03a",
  measurementId: "G-8HGVSK6JLH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function addBook({id, title, author, genre, image, name, email, date}) {
  let path = doc(db, "books", '' + id)
  let doesExist = (await getDoc(path)).exists()

  if (doesExist) {
    await updateDoc(path, {
      owners: arrayUnion({name, email, date})
    })
  } else {
    await setDoc(path, {
      title, author, genre, image,
      owners: [{
          name,
          email,
          date
        }],
      using: [],
    })
  }
}

export async function retrieveBooks() {
  const snapshot = await getDocs(collection(db, "books"))
  let data = snapshot.docs.map(doc => doc.data())
  return data
}

export async function retrieveBorrowedBooks({name, email}) {
  const q = query(collection(db, "books"), where("using", "array-contains", {name, email}))
  const snapshot = await getDocs(q)
  let data = snapshot.docs.map(doc => doc.data())
  return data
}

export async function borrowBook(id, {name, email}) {
  await updateDoc(doc(db, "books", '' + id), {
    using: arrayUnion({name, email})
  })
}

export async function returnBook(id, {name, email}) {
  await updateDoc(doc(db, "books", '' + id), {
    using: arrayRemove({name, email})
  })
}