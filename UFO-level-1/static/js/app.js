// YOUR CODE HERE!
var tbody = d3.select('tbody');

function renderTable(tableData) {
    tableData.forEach(dataElement => {

        var row = tbody.append("tr");
        var datetimeCell = row.append("td");
        datetimeCell.text(dataElement.datetime);

        var cityCell = row.append("td");
        cityCell.text(dataElement.city);

        var stateCell = row.append("td");
        stateCell.text(dataElement.state);

        var countryCell = row.append("td");
        countryCell.text(dataElement.country);

        var shapeCell = row.append("td");
        shapeCell.text(dataElement.shape);

        var durationMinutesCell = row.append("td");
        durationMinutesCell.text(dataElement.durationMinutes);

        var commentsCell = row.append("td");
        commentsCell.text(dataElement.comments);
    });
}

renderTable(data);
var button = d3.select("#filter-btn");
var form = d3.select("#form");
button.on("click", showAllRows);
form.on("submit",filter);
function filter() {
    d3.event.preventDefault();

    var filterValue = d3.select('#datetime').node().value;

    var rows = tbody.selectAll("tr").nodes();
    for(let i = 0; i < rows.length; i++) {
        var currentRow = d3.select(rows[i]);
        textString = currentRow.text();
        currentRow.style("display", null);
        if(!textString.startsWith(filterValue)) {
            currentRow.style("display", "none");
        }
    }
};

function showAllRows() {
    d3.event.preventDefault();
    var rows = tbody.selectAll("tr").nodes();
    for(let i = 0; i < rows.length; i++) {
        var currentRow = d3.select(rows[i]);
        currentRow.style("display", null);
    }
}


  
  