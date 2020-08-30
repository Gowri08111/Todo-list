var row = 1;
var n = 1;
var x = [],
    y = [],
    z = [];
var bool;

function sub(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var rollno = document.getElementById("rollno").value;
    var email = document.getElementById("email").value;

    if (name == "" || rollno == "" || email == "") {

        alert("All fields must be filled");
        return false;

    }
    if (n == 1) {
        var display = document.getElementById("content");
        var newRow = display.insertRow(row);
        var cell0 = newRow.insertCell(0);
        cell0.innerHTML = row;
        var cell1 = newRow.insertCell(1);
        cell1.innerHTML = name;
        var cell2 = newRow.insertCell(2);
        cell2.innerHTML = rollno;
        var cell3 = newRow.insertCell(3);
        cell3.innerHTML = email;
        x[n - 1] = name;
        y[n - 1] = rollno;
        z[n - 1] = email;
        n++;
    } else {

        for (var i = 0; i < (n - 1); i++) {
            if (rollno == y[i] || email == z[i]) {
                bool = true;
                break;
            } else {
                bool = false;
            }
        }
        if (bool) {
            alert("Data already found");
            return false;
        } else {
            row++;
            var display = document.getElementById("content");
            var newRow = display.insertRow(row);
            var cell0 = newRow.insertCell(0);
            cell0.innerHTML = row;
            var cell1 = newRow.insertCell(1);
            cell1.innerHTML = name;
            var cell2 = newRow.insertCell(2);
            cell2.innerHTML = rollno;
            var cell3 = newRow.insertCell(3);
            cell3.innerHTML = email;
            x[n - 1] = name;
            y[n - 1] = rollno;
            z[n - 1] = email;
            n++;

        }
    }

}

function remove(event) {
    if (n == 1) {
        alert("no data found");
        return false;
    } else {
        event.preventDefault();
        document.getElementById("content").deleteRow(row);
        x.pop();
        y.pop();
        z.pop();
        n--;
        row--;
        if (row == 0) {
            row = 1;
        }
    }
}