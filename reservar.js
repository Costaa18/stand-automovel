 // Retrieve the car list from local storage
 const storedCarList = localStorage.getItem('listaCarros');
 const listaCarros = JSON.parse(storedCarList);

 // Get the car ID from the URL
 const urlParams = new URLSearchParams(window.location.search);
 const carId = parseInt(urlParams.get('id'));

 // Find the car with the matching ID
 const selectedCar = listaCarros.find(car => car.id === carId);
 console.log(selectedCar);

 // Now you can use the selectedCar object to display information on the page
 if (selectedCar) {
   // Example: Display car information in the document
   document.getElementById('tituloCarro').innerText = selectedCar.marca + " " + selectedCar.modelo;
   document.getElementById('anoCarro').innerText = selectedCar.ano;
   document.getElementById('nomeCompletoCarro').innerText = selectedCar.marca + " " + selectedCar.modelo;
    document.getElementById('localizacaoSpan').innerHTML = "<b> Localização </b> : " + selectedCar.local;

    document.getElementById('carImg1').src = selectedCar.img;
    document.getElementById('carThumbnail1').src = selectedCar.img;
    document.getElementById('carImg2').src = selectedCar.img2;
    document.getElementById('carThumbnail2').src = selectedCar.img2;
    document.getElementById('carImg3').src = selectedCar.img3;
    document.getElementById('carThumbnail3').src = selectedCar.img3;
    document.getElementById('carImg4').src = selectedCar.img4;
    document.getElementById('carThumbnail4').src = selectedCar.img4;
   // Add more fields as needed
 }