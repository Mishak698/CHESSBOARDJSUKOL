function generateTable() {
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);
    if (isNaN(rows) || isNaN(columns) || rows < 1 || columns < 1) {
        alert('Zadejte platný počet řádků a sloupců (min. 1).');
        return;
    }
    let tableHTML = '<table>';
    for (let i = 0; i < rows; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < columns; j++) {
            tableHTML += '<td></td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    document.getElementById('table-container').innerHTML = tableHTML;
}
