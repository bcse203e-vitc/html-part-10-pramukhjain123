function generateTable() {
    const number = document.getElementById('number').value;
    let table = '<table border="1">';
    for (let i = 1; i <= 10; i++) {
        table += `<tr><td>${number} x ${i}</td><td>${number * i}</td></tr>`;
    }
    table += '</table>';
    document.getElementById('tableContainer').innerHTML = table;
}
