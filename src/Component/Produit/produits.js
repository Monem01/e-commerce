import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Produit.css";
import produits from "../../bd-json/produit";
export default function Produits() {
  let { params } = useParams();
  console.log(params)
 
  return (
    <section >
      <div class="row   row-cols-md-3 g-3" style={{margin:'80px'}}>
        {produits.map((data, index) => {
          if(data.catheg==params || params=="tout")
          return (
            <div class="col">
              <div class="card shadow-sm">
                <img src={`/Img/${data.img}`} className="img_card" />

                <div class="card-body">
                
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <Link to={`/detail/${data.id}`}
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        détail
                      
                      </Link>
                    </div>
                    <small class="text-muted">{data.prix} TND</small>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </section>
  )
}
