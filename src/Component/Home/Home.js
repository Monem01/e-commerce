import {Link} from 'react-router-dom'
import Slider from "../slider/Slider";
import produits from "../../bd-json/produit";
import "./Home.css";
export default function Home() {
    let i=1;
   function onAffiche(e){
       i=i+1;
       console.log(e)
       let font=document.getElementById("font");
       let elmnt=document.getElementById("text");
       let btn=document.getElementById("btn");
       if(i%2==0){
       btn.innerHTML="Moins <i class='fas fa-angle-up'></i>"
       elmnt.className="azerty";
       font.className="fas fa-angle-up";}
       else if(i%2!=0){
        elmnt.className="card-text";
        btn.innerHTML="Plus <i class='fas fa-chevron-down'></i>"
    }
       
    }
    
  return (
    <div>
      <Slider />
      <section >
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {produits.map((data, index) => {
          return (
            <div className="col">
              <div className="card shadow-sm">
                <img src={`/Img/${data.img}`} className="img_card" />

                <div className="card-body">
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link to={`/detail/${data.id}`}
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        détail
                      
                      </Link>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </section>
      
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              <i class="fas fa-home"></i>
            </a>
          </li>
        </ul>
        <p class="text-center text-muted">© 2021 Company, Inc</p>
      </footer>
    </div>
  );
}
