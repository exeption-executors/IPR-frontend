// ARRAY FOR HEADER.
let arrHead = [];
arrHead = ['', 'Emp. Name', 'Designation', 'Age'];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.

// FIRST CREATE A TABLE STRUCTURE BY ADDING A FEW HEADERS AND
// ADD THE TABLE TO YOUR WEB PAGE.
function createTable() {
    let empTable = document.createElement('table');
    empTable.setAttribute('id', 'empTable');            // SET THE TABLE ID.

    let tr = empTable.insertRow(-1);

    for (let h = 0; h < arrHead.length; h++) {
        let th = document.createElement('th');          // TABLE HEADER.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    let div = document.getElementById('cont');
    div.appendChild(empTable);    // ADD THE TABLE TO YOUR WEB PAGE.
}

// ADD A NEW ROW TO THE TABLE.s
function addRow() {
    let empTab = document.getElementById('empTable');

    let rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
    let tr = empTab.insertRow(rowCnt);      // TABLE ROW.
    tr = empTab.insertRow(rowCnt);

    for (let c = 0; c < arrHead.length; c++) {
        let td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);

        if (c === 0) {           // FIRST COLUMN.
                                 // ADD A BUTTON.
            let button = document.createElement('input');

            // SET INPUT ATTRIBUTE.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            // ADD THE BUTTON's 'onclick' EVENT.
            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        }
        else {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            let ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');

            td.appendChild(ele);
        }
    }
}



// DELETE TABLE ROW.
function removeRow(oButton) {
    let empTab = document.getElementById('empTable');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
}

// EXTRACT AND SUBMIT TABLE DATA.
function sumbit() {
    let myTab = document.getElementById('empTable');
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
}
