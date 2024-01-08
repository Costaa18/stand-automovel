const storedCarList = localStorage.getItem("listaCarros");
const listaCarros = JSON.parse(storedCarList);

const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get("id"));

const selectedCar = listaCarros.find((car) => car.id === carId);
//console.log(selectedCar);

const listaReservasArray = [];

if (selectedCar) {
  document.getElementById("tituloCarro").innerText =
    selectedCar.marca + " " + selectedCar.modelo;

  document.getElementById("anoCarro").innerText = selectedCar.ano;
  document.getElementById("anoCarroDetalhes").innerHTML = selectedCar.ano;

  document.getElementById("nomeCompletoCarro").innerText =
    selectedCar.marca + " " + selectedCar.modelo;

  document.getElementById("localizacaoSpan").innerHTML =
    "<b> Localização </b> : " + selectedCar.local;

  document.getElementById("kmCarroDetalhes").innerHTML = selectedCar.km;

  document.getElementById("combustivelCarroDetalhes").innerHTML =
    selectedCar.combustivel;

  document.getElementById("marcaCarroDetalhes").innerHTML = selectedCar.marca;

  document.getElementById("carImg1").src = selectedCar.img;
  document.getElementById("carThumbnail1").src = selectedCar.img;
  document.getElementById("carImg2").src = selectedCar.img2;
  document.getElementById("carThumbnail2").src = selectedCar.img2;
  document.getElementById("carImg3").src = selectedCar.img3;
  document.getElementById("carThumbnail3").src = selectedCar.img3;
  document.getElementById("carImg4").src = selectedCar.img4;
  document.getElementById("carThumbnail4").src = selectedCar.img4;

  document.getElementById("standCarro").innerText = selectedCar.stand;
} else if (selectedCar.estado == "indisponivel" || selectedCar.estado == null) {
  window.location.href = "index.html";
} else {
  window.location.href = "index.html";
}

function checkDisponibilidade() {
  // Obter os dados do formulário
  const nomeCompleto = document.querySelector(
    '#reservaForm input[name="nomeCompleto"]'
  ).value;
  const telefone = document.querySelector(
    '#reservaForm input[name="telefone"]'
  ).value;
  const localRecolha = document.querySelector(
    '#reservaForm input[name="localRecolha"]'
  ).value;
  const localEntrega = document.querySelector(
    '#reservaForm input[name="localEntrega"]'
  ).value;
  const dataRecolha = document.querySelector(
    '#reservaForm input[name="dataRecolha"]'
  ).value;
  const horaRecolha = document.querySelector(
    '#reservaForm input[name="horaRecolha"]'
  ).value;
  const dataEntrega = document.querySelector(
    '#reservaForm input[name="dataEntrega"]'
  ).value;
  const horaEntrega = document.querySelector(
    '#reservaForm input[name="horaEntrega"]'
  ).value;

  // Obter a lista de reservas existente da localStorage
  const storedReservas = localStorage.getItem("listaReservas");
  const listaReservasArray = storedReservas ? JSON.parse(storedReservas) : [];

  // Verificar disponibilidade
  if (selectedCar.estado === "disponivel") {
    // Adicionar reserva à lista
    const reserva = {
      idCarro: selectedCar.id,
      nomeCompleto,
      telefone,
      localRecolha,
      localEntrega,
      dataRecolha,
      horaRecolha,
      dataEntrega,
      horaEntrega,
    };

    listaReservasArray.push(reserva);

    // Atualizar estado do carro para indisponível
    selectedCar.estado = "indisponivel";

    // Atualizar localStorage
    localStorage.setItem("listaCarros", JSON.stringify(listaCarros));
    localStorage.setItem("listaReservas", JSON.stringify(listaReservasArray));

    // Mensagem de sucesso
    Swal.fire({
      icon: "success",
      title: "Reserva Efetuada",
      text: "Sua reserva foi efetuada com sucesso!",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "lista-carros.html";
      }
    });
  } else {
    // Mensagem de indisponibilidade
    Swal.fire({
      icon: "warning",
      title: "Carro Indisponível",
      text: "Desculpe, este carro não está disponível para reserva.",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    });
  }
}

// Adicionar evento de clique ao botão de Verificar Disponibilidade
document
  .querySelector(".check-available")
  .addEventListener("click", checkDisponibilidade);
