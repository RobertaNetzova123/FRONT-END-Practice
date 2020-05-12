function Calculate() {

    var input_value = document.getElementById("num").value;
    document.getElementById("num").value = '';
    console.log ("VAL:" + input_value);
    var table_place = document.getElementById("table");
    var tbl = document.createElement('table');

    if (input_value == "") {
        alert("Insert a number");
        return;
    }
    for (var i = 0; i <= input_value; i++) {

        var tr = tbl.insertRow();
        var td = tr.insertCell();
        var is_first_row;
        var cell_fill = '';

        cell_fill = i;
        is_first_row = false;

        if (i == 0) {
            cell_fill = 'X';
            is_first_row = true;
        }

        td.appendChild(document.createTextNode(cell_fill));
        td.setAttribute("class", "first");

        for (var k = 1; k <= input_value; k++) {

            var td = tr.insertCell();

            var cell_fill = k * (i);

            if (is_first_row == true) {
                cell_fill = k;
                td.setAttribute("class", "first");
            } else if (k == 1 && i == 1) {
                cell_fill = '';
            }

            td.appendChild(document.createTextNode(cell_fill));
        }
    }
    table_place.innerHTML = '';
    table_place.appendChild(tbl);
}