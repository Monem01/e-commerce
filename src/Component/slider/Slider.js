import { Link } from "react-router-dom";
import '../slider/Slider.css'
export default function slider(){
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Img/Slider/slider1.jpg" class="d-block w-100 bg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="h5">Hello, In Name Site</h5>
        <p class="p">welcom to EWM. SA-Digital& Development</p>
        <Link to={`/Produits/${"tout"}`} class="btn btn-secondary">
                        See All
                      </Link>        
      </div>
    </div>
    <div class="carousel-item">
      <img src="/Img/Slider/slider2.jpg" class="d-block w-100 bg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h5 class="h5">Hello, In Name Site</h5>
        <p class="p">welcom to EWM. SA-Digital& Development</p>
        <Link to={`/Produits/${"tout"}`} class="btn btn-secondary">
                        See All
                      </Link>      </div>
    </div>
    <div class="carousel-item">
      <img src="/Img/Slider/slider3.jpg" class="d-block w-100 bg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h5 class="h5">Hello, In Name Site</h5>
        <p class="p">welcom to EWM. SA-Digital& Development </p>
        <Link to={`/Produits/${"tout"}`} class="btn btn-secondary">
                        See All
                      </Link>
        <div class="slider-btn">
          
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</div>
    )
}