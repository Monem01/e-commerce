import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import produits from "../../bd-json/produit";
import {db} from "../Panier/firabase";
import {collection ,addDoc} from "firebase/firestore";
import "./detail.css";
export default function Detail() {

  const [panier ,setPanier]=useState([]);
  const p=collection(db,"panier");

  const AddPanier=async()=>{
    const data=await addDoc(p,{
      img:myProduct.img,libelle:myProduct.libelle ,prix:myProduct.prix,qte:Quantite});
      alert('Ajout terminer ')
      window.location.reload();
  }
  let { id } = useParams();
  let navigate = useNavigate();
  let myProduct = produits[id];
  let stock = myProduct.stock;
  const [Quantite, setQuantite] = useState(0);
  let tab = [];
  var students = [];
  const handleQuantite = (event) => {
    let qte = event.target.value;
    console.log(event.target.value);
    setQuantite(qte);
  };

  return (
    <div className="mycontainer  ">
      <div className="row">
        <img src={`/Img/${myProduct.img}`} className="imgdetail" />
      </div>
      <div className="row  ">
        <div className="col-lg-6 col-md-12 col-12 c1 ">
          <p className="libelle">
            {" "}
            {myProduct.libelle} <h4 className={stock}> |{stock} </h4>
          </p>

          <p className="prix">{myProduct.prix} TND</p>
          <hr />
          {myProduct.description}
          <hr />
          <h3>Retrait en Magasin ou Livraison Gratuite pour Cet Article</h3>
          <div className="panier">
            <p>Qté: </p>
            <input
              type="number"
              min="1" required
              placeholder="1"
              id="qte"
              onChange={handleQuantite}
            />
            <button
              className="btn btn-success"
              onClick={() => AddPanier()}
            >
              Ajouter au panier
            </button>
          </div>
          <br />

          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              navigate(`/produits/tout`);
            }}
          >
            Retour
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              navigate(`/`);
            }}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
