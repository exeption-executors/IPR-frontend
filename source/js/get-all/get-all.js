let source   = document.getElementById('client-row').innerHTML;
let template = Handlebars.compile(source);
let clientTable = document.querySelector('.clients-table');
// let contextForFirstRow = {name: "dwfwr", surname: "sdcsdc", email: "sfvsfvsv"};
// let contextForSecondRow = {name: "dwfwr", surname: "sdcsdc", email: "sfvsfvsv"};
// let firstRow    = template(contextForFirstRow);
// let secondRow    = template(contextForSecondRow);

// document.querySelector('.clients-table').insertAdjacentHTML('beforeend', firstRow);
// document.querySelector('.clients-table').insertAdjacentHTML('beforeend', secondRow);

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
        let clientContextInfo = {name: client.name, surname: client.surname, email: client.surname};
        let clientTemplate = template(clientContextInfo);
        clientTable.insertAdjacentHTML('beforeend', clientTemplate);
    });

})
.catch((e) => {
    console.log('bad request:\n' + e);
});


