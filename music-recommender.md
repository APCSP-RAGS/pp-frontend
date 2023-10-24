<html>
<head>
    <!-- load jQuery and DataTables output style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>var define = null;</script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
</head>

<!-- Body contains the contents of the Document -->
<body>
    <table id="demo" class="table">
        <thead>
            <tr>
                <th>Language</th>
                <th>Creator</th>
                <th>Year</th>
                <th>Latest Version</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Python</td>
                <td>Guido van Rossum</td>
                <td>1991</td>
                <td>3.11</td>
            </tr>
            <tr>
                <td>C</td>
                <td>Brian K. and Dennis R.</td>
                <td>1978</td>
                <td>C23</td>
            </tr>
            <tr>
                <td>C++</td>
                <td>Bjarne Stroustrup</td>
                <td>1979</td>
                <td>C++20</td>
            </tr>
            <tr>
                <td>Java</td>
                <td>James Gosling</td>
                <td>1995</td>
                <td>JDK 20</td>
            </tr>
            <tr>
                <td>HTML</td>
                <td>Tim Berners-Lee</td>
                <td>1980</td>
                <td>HTML5</td>
            </tr>
            <tr>
                <td>JavaScript</td>
                <td>Brendan Eich</td>
                <td>1995</td>
                <td>ES14</td>
            </tr>
            <tr>
                <td>Bash</td>
                <td>Brian Fox</td>
                <td>1989</td>
                <td>5.2</td>
            </tr>
            <tr>
                <td>PowerShell</td>
                <td>Jeffery Snover</td>
                <td>2006</td>
                <td>7.3</td>
            </tr>
            <tr>
                <td>C#</td>
                <td>Anders Hejlsberg</td>
                <td>2000</td>
                <td>C# 11.0</td>
            </tr>
            <tr>
                <td>SQL</td>
                <td>Donald C. & Raymond B.</td>
                <td>1974</td>
                <td>16.0</td>
            </tr>
        </tbody>
    </table>
</body>

<!-- Script is used to embed executable code -->
<script>
    const url = "https://awsrags-flask.stu.nighthawkcodingsociety.com/api/song/"

    const options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  // prepare fetch PUT options, clones with JS Spread Operator (...)
    const put_options = {...options, method: 'PUT'}; // clones and replaces method

    $("#demo").DataTable();
</script>
</html>
