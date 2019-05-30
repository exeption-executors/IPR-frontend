// ARRAY FOR HEADER.
let arrHead = [];
arrHead = ['', 'Emp. Name', 'Designation', 'Age'];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.



// FIRST CREATE A TABLE STRUCTURE BY ADDING A FEW HEADERS AND
// ADD THE TABLE TO YOUR WEB PAGE.
const createTable = () => {
    let iprTable = document.createElement('table');
    iprTable.setAttribute('id', 'iprTable');            // SET THE TABLE ID.

    let tr = iprTable.insertRow(-1);

    for (let h = 0; h < arrHead.length; h++) {
        let th = document.createElement('th');          // TABLE HEADER.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    let div = document.getElementById('cont');
    div.appendChild(iprTable);    // ADD THE TABLE TO YOUR WEB PAGE.
};

// ADD A NEW ROW TO THE TABLE.s
const addRow = () => {
    let empTab = document.getElementById('iprTable');

    let rowTemplate = document.getElementById('plan-task');

    let cloneRow = document.importNode(rowTemplate.content, true);
    empTab.appendChild(cloneRow);
};

const addAim = () => {

    let aimTemplate = document.getElementById('aim');

    let cloneAim = document.importNode(aimTemplate.content, true);



    let addAim = document.querySelector('.addAim');
    let deleteAim = cloneAim.querySelector('.deleteAim');

    addAim.addEventListener('click', (e) => {
        let aimList = e.target.parentNode.querySelector('.aims');
        console.log(aimList);
        aimList.appendChild(cloneAim);
    });

    deleteAim.addEventListener('click', (e) => {
        let aimList = document.querySelector('.aims');
        aimList.removeChild(e.target.parentNode);
    });
};


// DELETE TABLE ROW.
const removeRow = (oButton) => {
    let empTab = document.getElementById('iprTable');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
};

// EXTRACT AND SUBMIT TABLE DATA.
const sumbit = () => {
    let myTab = document.getElementById('iprTable');
    let values = [];

    // LOOP THROUGH EACH ROW OF THE TABLE.
    for (row = 1; row < myTab.rows.length - 1; row++) {
        for (c = 0; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.

            let element = myTab.rows.item(row).cells[c];
            if (element.childNodes[0].getAttribute('type') === 'text') {
                values.push("'" + element.childNodes[0].value + "'");
            }
        }
    }
    console.log(values);
};




