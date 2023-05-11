import './App.css';
import { collection, query, where,getDocs  } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


import React,{useState,useEffect} from 'react';


const firebaseConfig = {
  apiKey: "AIzaSyA_vN4xB-2UPviEZRZjlc3JaPNwXcx_wW0",
  authDomain: "bingo-ef543.firebaseapp.com",
  projectId: "bingo-ef543",
  storageBucket: "bingo-ef543.appspot.com",
  messagingSenderId: "461446988848",
  appId: "1:461446988848:web:97d1ac44677a7635bbd9f5",
  measurementId: "G-JWFEQL4MBV"
};


// console.log(citiesRef);
      // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  



function App() {
  const [blogs,setBlogs]=useState([

  ])
  useEffect(()=>{
    const q  = query(collection(db, "Blogs"));
    async function haha(){
      const querySnapshot = await getDocs(q);
      const massiv = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        massiv.push(doc.data())



        console.log('snap',querySnapshot);
        // setBlogs([...blogs,doc.data()])
        const text = doc.data()
        console.log('text',text);
        
        // setBlogs([{...blogs},{doc.data()}])
        
        
      });
      setBlogs(massiv)
    }
    haha()

  },[])


  console.log('blooo',blogs);


  return (
    <div className="App">
    <button onClick={()=>{console.log('mde',blogs)}}>ТЫК</button>
      {/* {blogs.map((item) =>{
        return(
        item.title
        )
      })} */}
  </div>
  );
}

export default App;
