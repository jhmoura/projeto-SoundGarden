// const BASE_URL_modal = 'https://xp41-soundgarden-api.herokuapp.com/';

const myModal = document.querySelector("#myModal");
const modalContent = document.querySelector("#modalContent");
const closeBtn = document.querySelector("#closeBtn");
const btnReserva = document.querySelector("#btnReserva");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const qtdIngressos = document.querySelector("#qtd");


closeBtn.addEventListener("click", (evento)=>{
    evento.preventDefault();
    myModal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
  }
  

btnReserva.addEventListener("click", (evento)=>{
    evento.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const idEvento = urlParams.get("id");
    reserva = {
        owner_name: nome.value,
        owner_email: email.value,
        number_tickets: qtdIngressos.value,
        event_id: idEvento
    };
    console.log(reserva);
    const reqOptions = {
        method: 'POST',
        body: reserva
    };
})