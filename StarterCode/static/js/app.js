// from data.js
var tableData = data;

// YOUR CODE HERE!


// Show dataset as default
tableData.forEach(appendTable);

// Select submit button
var submit = d3.select("#filter-btn");

 submit.on("click", function() {

// Remove existing table
   d3.select("tbody").html("");

 // Prevent page from refreshing
   d3.event.preventDefault();

// Get the value property of the input element
    var dateTime = d3.select("#datetime").property("value");
     console.log(dateTime);

    var filteredData = tableData.filter(record => record.datetime === dateTime);
     console.log(filteredData)

//  Display filtered dataset
    filteredData.forEach(appendTable);

});

// Create function that appends data from data.js to new table
function appendTable(report) {
    var tbody = d3.select("tbody");

    var row = tbody.append("tr");

    Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
}