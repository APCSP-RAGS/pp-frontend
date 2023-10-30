<!-- ---
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
      white-space: pre-line;
      display: block;
    }

    table th {
      background-color: #f2f2f2;
      font-weight: bold;
      white-space: pre-line;
    }

    table th, table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
      white-space: pre-line;
      height: 70px;
      overflow-y: scroll;
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
        <th>Lyrics</th>
      </tr>
    </thead>
    <tbody id="result">
      <!-- Data will be populated here -->
    </tbody>
  </table>

  <script>
    // Fetch data from the API
    const apiUrl = "https://awsrags-flask.stu.nighthawkcodingsociety.com/api/song/";
    const apiUrlLocal = "http://localhost:8069/api/song/"

    const local = false;

    if (local == false) {
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
              <td>${Song.lyrics}</td>
            `;
            resultContainer.appendChild(row);
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    } else {
      fetch(apiUrlLocal)
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
              <td>${Song.lyrics}</td>
            `;
            resultContainer.appendChild(row);
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    };
  </script>
</body>
</html> -->


<!DOCTYPE html>
<html>
<head>
  <style>
    /* Style for the table */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      white-space: pre-line;
      display: block;
    }

    table th {
      background-color: #f2f2f2;
      font-weight: bold;
      white-space: pre-line;
    }

    table th, table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
      white-space: pre-line;
      height: 70px;
      overflow-y: scroll;
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
        <th>Lyrics</th>
        <th>Lyrics Toggle</th> <!-- Add a new column for the Lyrics Toggle button -->
      </tr>
    </thead>
    <tbody id="result">
      <!-- Data will be populated here -->
    </tbody>
  </table>

  <script>
    // Function to toggle lyrics visibility
    function toggleLyrics(row) {
      const lyricsCell = row.querySelector('.lyrics-cell');
      lyricsCell.classList.toggle('show-lyrics');
    }

    // Fetch data from the API
    const apiUrl = "https://awsrags-flask.stu.nighthawkcodingsociety.com/api/song/";
    const apiUrlLocal = "http://localhost:8069/api/song/"

    const local = false;

    if (local == false) {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw an Error('Network response was not ok');
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
              <td class="lyrics-cell">${Song.lyrics}</td>
              <td><button onclick="toggleLyrics(this.parentNode.parentNode)">Toggle Lyrics</button></td>
            `;
            resultContainer.appendChild(row);
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    } else {
      fetch(apiUrlLocal)
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
              <td class="lyrics-cell">${Song.lyrics}</td>
              <td><button onclick="toggleLyrics(this.parentNode.parentNode)">Toggle Lyrics</button></td>
            `;
            resultContainer.appendChild(row);
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
  </script>
</body>
</html>

