let createPlan = document.querySelector('.create-button__submit');

createPlan.addEventListener('click', (e) => {
    let name = document.querySelector('.type-field--name');
    let surname = document.querySelector('.type-field--surname');
    let email = document.querySelector('.type-field--email');

    fetch('http://localhost:8080/clients/create', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({
            name: name.value,
            surname: surname.value,
            email: email.value
        })
    })
    .then((response) => {
        console.log(response);
    })
    .catch((e) => {
        console.log('bad request:\n' + e);
    })
});
