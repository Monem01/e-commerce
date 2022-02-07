import { BrowserRouter, Routes, Route  } from "react-router-dom";

import {useEffect,useState} from 'react'
import Home from "../Home/Home";
import Error from "../erreur/Error";
import Produits from "../Produit/produits";
import Contact from "../contact/Contact";
import Détail from "../detail/Detail";
import Login from "../Login/Login"; 
import Panier from '../Panier/Panier'
import Navbar from "../Navbar/Navbar";
export default function Router(){
  const [auth,setAuth] = useState(false)
 console.log('auth,auth',auth)
   
     return(
        <BrowserRouter>
        {/* { auth !== false &&  */}
        <Navbar />
           <Routes>
         {/* {  
        auth === false ? <> */}
          <Route path='*' exact element={<Login setAuth={setAuth}/>} />  
           
          {/* </>   
         :
         <> */}
          <Route path='' exact element={<Home />} />  
          <Route path="/produits" exact element={<Produits />} />
          <Route path="/produits/:params" exact element={<Produits />} />
          <Route path="/Detail/:id" exact element={<Détail />} />
          
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/Panier" exact element={<Panier/>}/>
          <Route element={<Error />} />
         {/* </>
        } */}
               </Routes>   
         </BrowserRouter>
    )
}