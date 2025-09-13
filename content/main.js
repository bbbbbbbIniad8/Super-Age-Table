const table = document.getElementById('table')
const input = document.getElementById('age')
const btn = document.getElementById('submit-btn');

function createAddElement(parent, childId, childClass, childTextContent, childDisplayStyle){
    const child = document.createElement('td'); 
    child.id = childId;
    child.className = childClass;
    child.textContent=childTextContent;
    if(childDisplayStyle !== null){
        child.style.display = childDisplayStyle;
    }
    parent.appendChild(child);
    return child;
}

function createTable(age){
    for (let i=2025; i>=1867; i--, age--){
        const tableContent = document.createElement('tr');
        tableContent.className = 'table-item';
        createAddElement(tableContent, `test${i}`, 'content-item', i, null);
        createAddElement(tableContent, `test${i}_2`, 'content-item', age, null);
        if (data[i]){
            createAddElement(tableContent, `test${i}_3`, 'content-item', data[i], null);
        } else {
            createAddElement(tableContent, `test${i}_3`, 'content-item', "", null);
        }

        if (caludata[i]){
            createAddElement(tableContent, `test${i}_3`, 'content-item', caludata[i], null);
        } else {
            createAddElement(tableContent, `test${i}_3`, 'content-item', "", null);
        }
        table.appendChild(tableContent);
    }
}

function resetTable(){
    const targetElements = document.querySelectorAll('.table-item');
    targetElements.forEach(element => {
        element.replaceChildren();
    });
}


btn.addEventListener('click', ()=>{
    resetTable()
    createTable(input.value);
})


