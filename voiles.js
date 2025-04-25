document.addEventListener('DOMContentLoaded', function() {
    // Create the table and search bar
    const container = document.getElementById('voiles-tableau');

    container.innerHTML = `
        <h2>Boat Sail Types</h2>
        <input type="text" id="searchInput" onkeyup="searchTable()" placeholder="Search for boats or sail types...">
        <table id="boatTable">
            <thead>
                <tr>
                    <th>Boat Name</th>
                    <th>Sail Type</th>
                    <th>Surface Area (m²)</th>
                    <th>Price (€)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Oceanis 40</td>
                    <td>GV</td>
                    <td>45</td>
                    <td>1500</td>
                </tr>
                <tr>
                    <td>Dufour 360</td>
                    <td>Genoa</td>
                    <td>35</td>
                    <td>1300</td>
                </tr>
                <tr>
                    <td>Beneteau 50</td>
                    <td>Spinnaker</td>
                    <td>60</td>
                    <td>2500</td>
                </tr>
                <tr>
                    <td>Lagoon 380</td>
                    <td>Genoa</td>
                    <td>45</td>
                    <td>1800</td>
                </tr>
            </tbody>
        </table>
    `;

    window.searchTable = function() {
        let input = document.getElementById('searchInput');
        let filter = input.value.toUpperCase();
        let table = document.getElementById('boatTable');
        let tr = table.getElementsByTagName('tr');
        
        for (let i = 1; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td');
            let matchFound = false;
            
            for (let j = 0; j < td.length; j++) {
                if (td[j] && td[j].innerText.toUpperCase().indexOf(filter) > -1) {
                    matchFound = true;
                }
            }
            
            if (matchFound) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    };
});
