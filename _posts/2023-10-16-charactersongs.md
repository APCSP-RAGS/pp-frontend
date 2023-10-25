---
title: Songs for Breaking Bad Characters
layout: base
description: Uses GET requests to retrieve data from a custom API using SQLite and served on our Flask backend.
permalink: /data/songs
tags: [javascript, fetch, dom, getElementID, appendChild]
---
<html>
<head>
  <style>
    /* Style for the table */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }

    table th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    table th, table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
  </style>
</head>
<body>
  <!-- HTML table for displaying data -->
  <table>
    <thead>
      <tr>
        <th>Character</th>
        <th>Song Name</th>
        <th>Artist</th>
        <th>Genre</th>
      </tr>
    </thead>
    <tbody id="result">
      <!-- Data will be populated here -->
    </tbody>
  </table>

  <script>
    // Fetch data from the API
    const apiUrl = "https://awsrags-flask.stu.nighthawkcodingsociety.com/api/song/";

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const resultContainer = document.getElementById("result");

        data.forEach(Song => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${Song.character}</td>
            <td>${Song.song_name}</td>
            <td>${Song.artist}</td>
            <td>${Song.genre}</td>
          `;
          resultContainer.appendChild(row);
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  </script>
</body>
</html>
