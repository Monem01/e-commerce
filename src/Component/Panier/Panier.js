import "./Panier.css";
import { useNavigate } from "react-router-dom";
import {db} from "./firabase";
import {collection, deleteDoc, getDocs ,doc} from "firebase/firestore";
import {useState,useEffect} from 'react';
export default function Panier() {
  const [user ,setUser]=useState([]);
  const p=collection(db,"panier");

      useEffect(()=>{
            const getusers= async()=>{
              const data= await getDocs(p);
              setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
            };

            getusers();
      },[]);
      const deleteP = async(id)=>{
        const Produit=doc(db,"panier",id);
         await deleteDoc(Produit);
         window.location.reload();
      }
      
  return (
    <div style={{ margin: "100px" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Article</th>
            <th scope="col">Libelle</th>
            <th scope="col">Prix</th>
            <th scope="col">Quantites</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>



          {user.map(data=>{
            return(
              <tr id="enreg">
            <th scope="row">
              <img src={`/Img/${data.img}`} className="imgPanier" />
            </th>
            <td>{data.libelle}</td>
            <td>{data.prix}</td>
            <td>{data.qte}</td>
            <th>
              <button className="btn btn-danger" onClick={()=>{
                deleteP(data.id);
              }}
              >
                Supprimer
              </button>
            </th>
          </tr>
            )
          })}
          





          <tr>
            <td></td>
            <td></td>
            <td colSpan="5">
              <button
                className="btn btn-success"
                id="commande"
                // onClick={handelAffich}
              >
                Commander
              </button>
              <button
                className="btn btn-success"
                style={{ width: "120px" }}
                // onClick={handelNavigate}
              >
                Retour
              </button>
            </td>
          </tr>
        </tbody>
        <section id="cmd" className="commander">
          <div class="mb-3">
            <div class="mb-3">
              <label class="form-label"> address Email</label>
              <input type="email" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Num Tél</label>
              <input type="tel" class="form-control" />
            </div>
            <label class="form-label">Paiment</label>
            <select class="form-select">
              <option>espéce</option>
              <option>carte VISA International</option>
              <option>Mastercard</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label">Adresse</label>
            <textarea className="form-control" />
          </div>
          <button className="btn btn-success">Envoyer</button>
        </section>
      </table>

    </div>
  );
}
