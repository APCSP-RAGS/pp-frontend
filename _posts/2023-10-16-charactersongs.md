---
title: Songs for Breaking Bad Characters
layout: base
description: Uses GET requests to retrieve data from a custom API using SQLite and served on our Flask backend.
permalink: /data/songs
tags: [javascript, fetch, dom, getElementID, appendChild]
---
<script>
    let songsData = []; // Store the fetched song data

    // Function to make a GET request and populate the table
    function fetchData() {
        fetch('https://awsrags-flask.stu.nighthawkcodingsociety.com/api/song')
            .then(response => response.json())
            .then(data => {
                songsData = data; // Store the fetched data
                updateTable(data);
                populateCharacterDropdown(data);
            })
            .catch(error => console.error('Error:', error));
    }

    // Function to populate the table with song data
    function updateTable(data) {
        const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
        table.innerHTML = ''; // Clear the table

        data.forEach(item => {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);

            cell1.innerHTML = item.character;
            cell2.innerHTML = item.song;
        });
    }

    // Function to populate the character dropdown
    function populateCharacterDropdown(data) {
        const characterDropdown = document.getElementById('character-dropdown');
        characterDropdown.innerHTML = ''; // Clear the dropdown

        const uniqueCharacters = [...new Set(data.map(item => item.character))];
        uniqueCharacters.forEach(character => {
            const option = document.createElement('option');
            option.value = character;
            option.text = character;
            characterDropdown.appendChild(option);
        });
    }

    // Function to filter and update the table based on selected character
    function filterTable() {
        const selectedCharacter = document.getElementById('character-dropdown').value;
        const filteredData = songsData.filter(item => item.character === selectedCharacter);
        updateTable(filteredData);
    }

    // Function to sort the table by song name
    function sortTable() {
        const sortedData = songsData.slice(); // Create a copy of the data
        sortedData.sort((a, b) => a.song.localeCompare(b.song));
        updateTable(sortedData);
    }

    // Call the fetchData function when the page loads
    window.onload = fetchData();

</script>


    <h1>JSON Data Table</h1>
    <table id="data-table">
        <thead>
            <tr>
                <th>Character</th>
                <th>Song Name</th>
                <th>Artist</th>
                <th>Genre</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
</body>
</html>
