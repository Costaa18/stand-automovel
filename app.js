let listaCarros = JSON.parse(localStorage.getItem('listaCarros')) || [];

const listaCarrosArray = [
  {
    id: 1,
    modelo: "E-type",
    marca: "Jaguar",
    ano: 1978,
    preco: "1.500.000€",
    combustivel: "gasolina",
    km: "10km",
    img: "assets/img/cars/jaguar.jpg",
    img2: "assets/img/cars/jaguar2.jpg",
    img3: "assets/img/cars/jaguar-etype.png",
    img4: "assets/img/cars/jaguar3.webp",
    lugares: "5 pessoas",
    stand: "Stand Famalicao",
    local: "Nova Iorque, EUA",
    standImg: "assets/img/cars/car-list-icon-01.png",
    estado: "disponivel",
    link: "jaguare-type.html"
  },
  {
    id: 2,
    modelo: "Dawn Drophead 1949",
    marca: "Rolls Royce",
    ano: 1949,
    preco: "7.800.000€",
    combustivel: "gasolina",
    km: "10km",
    img: "assets/img/cars/rolls-royce.jpg",
    img2: "assets/img/cars/rolls-royce2.webp",
    img3: "assets/img/cars/rolls-royce3.avif",
    img4: "assets/img/cars/rolls-royce4.jpg",
    lugares: "5 pessoas",
    stand: "Auto Mobilitcs",
    local: "Nova Iorque, EUA",
    standImg: "assets/img/cars/car-list-icon-02.png",
    estado: "disponivel",
    link: "rolls-royce.html"
  },
  {
    id: 3,
    modelo: "365 Speedster 1954",
    marca: "Porsche",
    ano: 1954,
    preco: "4.350.000€",
    combustivel: "gasolina",
    km: "10km",
    img: "assets/img/cars/porsche-spyder.jpg",
    img2: "assets/img/cars/porsche2.jpg",
    img3: "assets/img/cars/porsche3.jpg",
    img4: "assets/img/cars/porsche4.jpg",
    lugares: "5 pessoas",
    stand: "Auto Mobilitcs",
    local: "Nova Iorque, EUA",
    standImg: "assets/img/cars/car-list-icon-02.png",
    estado: "indisponivel",
    link : "porsche.html"
  },
  {
    id: 4,
    modelo:"300 SL Gullwing 1957",
    marca: "Mercedes",
    ano: 1957,
    preco: "16.350.000€",
    combustivel: "gasolina",
    km: "10km",
    img: "assets/img/cars/mercedes.jpg",
    img2: "assets/img/cars/mercedes2.webp",
    img3: "assets/img/cars/mercedes3.jpg",
    img4: "assets/img/cars/mercedes4.webp",
    lugares: "5 pessoas",
    stand: "Auto Docs",
    local: "Nova Iorque, EUA",
    standImg: "assets/img/cars/car-list-icon-03.png",
    estado: "disponivel",
    link:"mercedes.html"
  }
];
localStorage.setItem('listaCarros', JSON.stringify(listaCarrosArray));

console.log(listaCarros);
console.log(localStorage.getItem('listaCarros'));


function generateCarListings() {
    const carListingsContainer = document.getElementById('carListings');

    listaCarros.forEach((car, index) => {
      const listingElement = document.createElement('div');
      listingElement.classList.add('listview-car');
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
  <span class="custom-badge ${car.estado === 'disponivel' ? 'custom-badge-success' : 'custom-badge-danger'}">${car.estado === 'disponivel' ? 'Disponível' : 'Indisponível'}</span>
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
                             <span><img src="assets/img/icons/car-parts-02.svg" alt="${car.km}"></span>
                             <p>${car.km}</p>
                         </li>
                         <li>
                             <span><img src="assets/img/icons/car-parts-03.svg" alt="${car.combustivel}"></span>
                             <p>${car.combustivel}</p>
                         </li>
                         <li>
                             <span><img src="assets/img/icons/car-parts-04.svg" alt="Power"></span>
                             <p>AWD</p>
                         </li>
                         <li>
                             <span><img src="assets/img/icons/car-parts-05.svg" alt="${car.ano}"></span>
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
                                 <h6><i class="feather-map-pin me-2"></i>${car.local}</h6>
                             </div>
                         </div>	
                     </div>
                     <div class="listing-button">
                     <a href="reservar.html?id=${car.id}" class="btn btn-order" id="reserveButton">
                        <span><i class="feather-calendar me-2"></i></span>Reservar Agora
                    </a>
                     </div>
                </div>	
            </div>
          </div>
        </div>
      `;


      const reserveButton = listingElement.querySelector('.btn-order');
    reserveButton.dataset.carIndex = index;
    reserveButton.addEventListener('click', handleReserveButtonClick);
  
  
      carListingsContainer.appendChild(listingElement);
    });
  }

  generateCarListings();


  function handleReserveButtonClick(event) {
    event.preventDefault(); 
  
    const carIndex = event.currentTarget.dataset.carIndex;
    const car = listaCarros[carIndex];
  
    if (car.estado === 'disponivel') {
      
      window.location.href = `reservar.html?id=${car.id}`;
    } else {
        
      Swal.fire({
        icon: 'warning',
        title: 'Carro Indisponível',
        text: 'Desculpe, este carro não está disponível para reserva.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      });
    }
}
