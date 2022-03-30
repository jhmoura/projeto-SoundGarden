const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com'
const optionsEvents = {
    method: "GET",
}
const table = document.querySelector(".tbody");

//Pegando o ID pela URL
const urlParams = new URLSearchParams(window.location.search)
const paramID = urlParams.get('id')

const listarReservas = async () => {
    const resposta = await fetch(`${BASE_URL}/bookings/?id=${paramID}`, optionsEvents);
    console.log(resposta);
    const reservas = await resposta.json();
    //console.log(reservas);
    const htmlEventos = reservas.map((evento, index) => {
        const linhaHTML = `<tr>
        <th scope="row">${index+1}</th>
        <td>${evento.owner_name}</td>
        <td>${evento.owner_email}</td>
        <td>${evento.number_tickets}</td>
        </tr>`
        return linhaHTML
    });
    console.log(htmlEventos[3]);
    return htmlEventos;
}

const reservas = listarReservas()
    .then((resp) => {
        //console.log(resp);
        table.innerHTML = resp
    })