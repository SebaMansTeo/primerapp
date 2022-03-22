// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDoc, doc, getDocs, collection, query, where } from "firebase/firestore"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId ?
      query(collection(firestoreDb, 'Productos'), where('category', '==', categoryId)) :
      collection(firestoreDb, 'Productos')

    getDocs(collectionRef).then(response => {
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })

        resolve(products)
    }).catch((error) => {
        reject('Error obteniendo productos: ', error)
    })
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve ,reject) => {
    const docRef = doc(firestoreDb, 'Productos', productId)

    getDoc(docRef).then(response => {
        const product = { id: response.id, ...response.data()}
        resolve(product)
    }).catch((error) => {
        reject('Error obteniendo producto: ', error)
    })
  })
}
