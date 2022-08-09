import { getFirestore, collection, where, query, doc, setDoc, 
  updateDoc, arrayUnion, arrayRemove, getDocs, getDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

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

const auth = getAuth(app)
const db = getFirestore(app)

var uiConfig = {
  signInSuccessUrl: '/library',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

export { uiConfig, auth }

export async function addBook({id, title, author, genre, image, email, date}) {
  let path = doc(db, "books", '' + id)
  let doesExist = (await getDoc(path)).exists()

  if (doesExist) {
    await updateDoc(path, {
      owners: arrayUnion({email, date})
    })
  } else {
    await setDoc(path, {
      title, author, genre, image,
      owners: [{
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

export async function retrieveBorrowedBooks({email}) {
  const q = query(collection(db, "books"), where("using", "array-contains", {email}))
  const snapshot = await getDocs(q)
  let data = snapshot.docs.map(doc => doc.data())
  return data
}

export async function borrowBook(id, {email}) {
  await updateDoc(doc(db, "books", '' + id), {
    using: arrayUnion({email})
  })
}

export async function returnBook(id, {email}) {
  await updateDoc(doc(db, "books", '' + id), {
    using: arrayRemove({email})
  })
}