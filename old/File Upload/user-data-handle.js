export const postDataHtml = (status) => {
    const msg = status === 'ok' ? 'Data Send' : 'Server Error';

    return(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
    <link rel="stylesheet" href="./index.css" />
</head>
<body>
    <h1>${msg}</h1>
    <a href="/">
        <button>Home</button>
    </a>
</body>
</html>`);
}

export const getDataHtml = () => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
    <link rel="stylesheet" href="./index.css" />
</head>
<body>
    <form action="/data" method="post" enctype="multipart/form-data">
        <input type="text" name="username" placeholder="Enter your name" />
        <input type="file" name="userfiles" /><br/>
        <button type="submit">submit</button>
    </form>
</body>
</html>`;