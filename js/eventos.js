const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
const optionsEvents = {
    method: "GET",
}

const ListarEventos = async (limit) => {
    const resposta = await fetch(`${BASE_URL}/events`, optionsEvents);
    const eventos = await resposta.json();
    return eventos.slice(0, limit);
}

ListarEventos(10).then(resp => {
    const elementoContainer = document.querySelector('.container.d-flex.justify-content-center.align-items-center.flex-wrap');

    console.log(resp);

    elementoContainer.innerHTML = '';
    resp.forEach(conteudo => {
        elementoContainer.innerHTML += ` <article class="evento card p-5 m-3">
        <h2>${conteudo.name} - ${conteudo.scheduled}</h2>
        <h4>${conteudo.attractions}</h4>
        <p>${conteudo.description}</p>
        <a href="#" class="btn btn-primary">reservar ingresso</a>
    </article>
        `
    });


});