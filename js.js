let form = document.forms.form;

form.querySelector('button').addEventListener('click', () =>{
    let formData = new FormData(form);
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    for(let key of formData.keys() ){
        let th = document.createElement('th');
        th.textContent =  key;
        headerRow.appendChild(th)
    }
    table.appendChild(headerRow);

    let dataRow = document.createElement('tr');
    for(let value of formData.values() ){
        let td = document.createElement('td');
        td.textContent =  value;
        dataRow.appendChild(td)
    }
    table.appendChild(dataRow);

    form.replaceWith(table);

})

document.body.appendChild(form);

