let arrHead = [];
arrHead = ['', 'Приоритет', 'Цель', 'Критерии достижения цели', 'Cрок достижения', 'Команда поддержки'];

const createTable = () => {
    let iprTable = document.createElement('table');
    let tr = iprTable.insertRow(-1);
    let div = document.getElementById('cont');

    iprTable.setAttribute('id', 'iprTable');
    iprTable.classList.add('create-plan');


    for (let h = 0; h < arrHead.length; h++) {
        let th = document.createElement('th');
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    div.appendChild(iprTable);
};

const addRow = () => {
    let empTab = document.getElementById('iprTable');
    let rowTemplate = document.getElementById('plan-task');
    let cloneRow = document.importNode(rowTemplate.content, true);
    let picker = new Pikaday({
            field: cloneRow.querySelector('.date-picker'),
            format: 'DD/MM/YYYY',
            toString: (date, format) => {
                const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
                const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
                const  year = date.getFullYear();

                return `${day}/${month}/${year}`;
            }

        });

    empTab.appendChild(cloneRow);
};

const addAim = (addAim) => {
    let aimTemplate = document.getElementById('aim');
    let cloneAim = document.importNode(aimTemplate.content, true);
    let deleteAim = cloneAim.querySelector('.deleteAim');
    let aimList = addAim.parentNode.querySelector('.aims');

    deleteAim.addEventListener('click', (e) => {
        aimList.removeChild(e.target.parentNode);
    });

    aimList.appendChild(cloneAim);
};


const addMember = (addMember) => {
    let memberTemplate = document.getElementById('member');
    let cloneMember = document.importNode(memberTemplate.content, true);
    let deleteMember = cloneMember.querySelector('.deleteMember');
    let membersList = addMember.parentNode.querySelector('.members');

    deleteMember.addEventListener('click', (e) => {
        membersList.removeChild(e.target.parentNode);
    });

    membersList.appendChild(cloneMember);
};


const removeRow = (removeRowButton) => {
    let empTab = document.getElementById('iprTable');
    empTab.deleteRow(removeRowButton.parentNode.parentNode.rowIndex);
};




//TODO: write script whcih will be get all fields combine them and send to server in json
// const sumbit = () => {
//     let myTab = document.getElementById('iprTable');
//     let values = [];
//
//     for (row = 1; row < myTab.rows.length - 1; row++) {
//         for (c = 0; c < myTab.rows[row].cells.length; c++) {
//
//             let element = myTab.rows.item(row).cells[c];
//             if (element.childNodes[0].getAttribute('type') === 'text') {
//                 values.push("'" + element.childNodes[0].value + "'");
//             }
//         }
//     }
//     console.log(values);
// };




