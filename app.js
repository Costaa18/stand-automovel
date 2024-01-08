let listaCarros = JSON.parse(localStorage.getItem("listaCarros")) || [];

console.log(listaCarros);
console.log(localStorage.getItem("listaCarros"));

function generateCarListings() {
  const carListingsContainer = document.getElementById("carListings");

  listaCarros.forEach((car, index) => {
    const listingElement = document.createElement("div");
    listingElement.classList.add("listview-car");
    listingElement.innerHTML = `
        <div class="card">
          <div class="blog-widget d-flex">
            <div class="blog-img">
              <a href="${car.link}">
                <img src="${car.img}" class="img-fluid" alt="blog-img">
              </a>
            </div>
            <div class="bloglist-content w-100">
            <div class="card-body">
                 <div class="blog-list-head d-flex">
                     <div class="blog-list-title">
                         <h3><a href="${car.link}">${car.marca} ${car.modelo}
                         </a></h3>
                         <h6>Categoria : <span>${car.marca}</span></h6>		
                     </div>
                     <div class="blog-list-rate">
  <span class="custom-badge ${
    car.estado === "disponivel" ? "custom-badge-success" : "custom-badge-danger"
  }">${car.estado === "disponivel" ? "Disponível" : "Indisponível"}</span>
  <h6>${car.preco}<span></span></h6>
</div>
                 </div>	
                 <div class="listing-details-group">
                     <ul>
                         <li>
                             <span><img src="assets/img/icons/car-parts-05.svg" alt="Auto"></span>
                             <p>Auto</p>
                         </li>
                         <li>
                             <span><img src="assets/img/icons/car-parts-02.svg" alt="${
                               car.km
                             }"></span>
                             <p>${car.km}</p>
                         </li>
                         <li>
                             <span><img src="assets/img/icons/car-parts-03.svg" alt="${
                               car.combustivel
                             }"></span>
                             <p>${car.combustivel}</p>
                         </li>
                         <li>
                             <span><img src="assets/img/icons/car-parts-04.svg" alt="Power"></span>
                             <p>AWD</p>
                         </li>
                         <li>
                             <span><img src="assets/img/icons/car-parts-05.svg" alt="${
                               car.ano
                             }"></span>
                             <p>${car.ano}</p>	
                         </li>
                         <li>
                             <span><img src="assets/img/icons/car-parts-06.svg" alt="Lugares"></span>
                             <p>${car.lugares}</p>
                         </li>
                     </ul>	
                 </div>	
                 <div class="blog-list-head list-head-bottom d-flex">
                     <div class="blog-list-title">
                         <div class="title-bottom">
                             <div class="car-list-icon">
                                 <img src="${car.standImg}" alt="">
                             </div>
                             <div class="address-info">
                                 <h5><a href="#">Lincoln Park</a></h5>
                                 <h6><i class="feather-map-pin me-2"></i>${
                                   car.local
                                 }</h6>
                             </div>
                         </div>	
                     </div>
                     <div class="listing-button">
                     <a href="reservar.html?id=${
                       car.id
                     }" class="btn btn-order" id="reserveButton">
                        <span><i class="feather-calendar me-2"></i></span>Reservar Agora
                    </a>
                     </div>
                </div>	
            </div>
          </div>
        </div>
      `;

    const reserveButton = listingElement.querySelector(".btn-order");
    reserveButton.dataset.carIndex = index;
    reserveButton.addEventListener("click", handleReserveButtonClick);

    carListingsContainer.appendChild(listingElement);
  });
}

generateCarListings();

function handleReserveButtonClick(event) {
  event.preventDefault();

  const carIndex = event.currentTarget.dataset.carIndex;
  const car = listaCarros[carIndex];

  if (car.estado === "disponivel") {
    window.location.href = `reservar.html?id=${car.id}`;
  } else {
    Swal.fire({
      icon: "warning",
      title: "Carro Indisponível",
      text: "Desculpe, este carro não está disponível para reserva.",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    });
  }
}

