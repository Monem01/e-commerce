import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import {useState,useEffect} from 'react';
import {db} from "../Panier/firabase";
import {collection ,getDocs} from "firebase/firestore";
const Navbar=()=> {
  const p=collection(db,"panier");
const [nb,setnb]=useState('');
const [panier,setPanier]=useState([]);
const pn=collection(db,"panier");

useEffect(()=>{
      const getusers= async()=>{
        const data= await getDocs(pn);
        setPanier(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
      };

      getusers();
},[]);
console.log(panier.length)
// setnb(panier.length)
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid ">
            <a className="navbar-brand">E W M </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div style={{display:'flex'}}> 
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    to="/"
                    className="nav-link "
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    to="/Contact"
                    className="nav-link"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    list des produits
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="li">
                      <Link to={`/Produits/${"info"}`} className="dropdown-item">
                        Informatique
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to={`/Produits/${"meuble"}`} className="dropdown-item">
                        Meuble
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to={`/Produits/${"sport"}`} className="dropdown-item">
                        Sport
                      </Link>
                    </li>
                  </ul>
                </li>

                </div>
                <li ><NavLink
                    activeClassName="active"
                    to="/panier"
                    className="nav-link position"
                  >
                    <i className="fal fa-shopping-cart"></i><sup>{panier.length}</sup>
                  </NavLink></li>
              </ul>
              <div className="menu-icons">
            
            <i className="far fa-align-justify"></i> 
          </div>
            </div>
          </div>
        </nav>
      </div>
  
      
       
      
  );
}
export default  Navbar
