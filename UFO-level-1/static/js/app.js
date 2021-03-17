// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Select the tbody
var tbody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Empty the table object before appending filter results.
  tbody.html('')

  var filteredData = tableData.filter(data => data.datetime === inputValue);
  filteredData.forEach((sighting) => {

    // Append a row to the table for each result.
    var row = tbody.append("tr");
    
    // Append the values of each of the objects in the result as the created rows' content.
    Object.entries(sighting).forEach(([key, value]) => {
        var datacell = row.append("td");
        datacell.text(value);
    });
  });
}  
