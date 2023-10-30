<!DOCTYPE html>
<html>
<head>
  <style>
    /* Global Styles */
    body {
      background-color: #000;
      color: #0f0;
      font-family: 'Courier New', monospace;
    }

    /* Center the table horizontally */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    /* Style for the table */
    .table-container {
      background-color: #333;
      border-radius: 10px;
      padding: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      white-space: pre-line;
    }

    table th {
      background-color: #333;
      color: #0f0;
      font-weight: bold;
      white-space: pre-line;
    }

    table th, table td {
      border: none; /* Remove borders from cells */
      padding: 8px;
      text-align: left;
      border-radius: 10px;
    }

    .lyrics {
      display: none;
    }

    /* Add a hacker-inspired style */
    .hacker-theme {
      background-color: #333;
      color: #0f0;
    }

    .hacker-theme a {
      color: #0f0;
    }
  </style>
</head>
<body class="hacker-theme">
  <div class="container">
    <div class="table-container">
      <!-- HTML table for displaying data -->
      <table class="hacker-theme">
        <thead>
          <tr>
            <th>Character</th>
            <th>Song Name</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Lyrics</th>
            <th>Lyrics Toggle</th>
          </tr>
        </thead>
        <tbody id="result">
          <!-- Data will be populated here -->
        </tbody>
      </table>
    </div>
  </div>

  <script>
    // Function to toggle lyrics visibility
    function toggleLyrics(row) {
      const lyricsCell = row.querySelector('.lyrics');
      if (lyricsCell.style.display === 'none' || lyricsCell.style.display === '') {
        lyricsCell.style.display = 'block';
      } else {
        lyricsCell.style.display = 'none';
      }
    }

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
            <td class="lyrics">${Song.lyrics}</td>
            <td><button onclick="toggleLyrics(this.parentNode.parentNode)">Toggle Lyrics</button></td>
          `;
          resultContainer.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  </script>
</body>
</html>
