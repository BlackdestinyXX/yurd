const indexhtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <script src="./script.js"></script>
    <title>Hello World!</title>
</head>
<body>
    <h1>✨ Hello World ✨</h1>
</body>
</html>`

const stylecss = `* {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
}`


const scriptjs = `function hello() {
    console.log('Hello World!');
}

hello()`

module.exports = {
    indexhtml,
    scriptjs,
    stylecss
}