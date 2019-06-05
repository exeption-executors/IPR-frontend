let getClientsButton = document.querySelector('.clients-getter__button');
let outField = document.querySelector('.clients-getter__out');

getClientsButton.addEventListener('click', (e) => {
    fetch('http://localhost:8080/clients/list', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
    })
    .then((response) => {
        return response.json();
    })
    .then((clients) => {
        let buffer = '';
        clients.forEach((client) => {
            buffer += `<li>${JSON.stringify(client)}</li>`
        });

        outField.innerHTML = buffer;
    })
    .catch((e) => {
        console.log('bad request:\n' + e);
    })
});
