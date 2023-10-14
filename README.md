# cassandracarlos.com
Code, assets and hosting for my personal website [cassandracarlos.com](https://cassandracarlos.com).

This single-page website provides information about me, namely:

 * my name and occupation (web designer and developer) and bio
 * my skillset (including programming languages and software)
 * email form and social media links (instagram, linkedin, facebook)

 It will  also include content like:

 * list of freelance services and other relevant information
 * curated works (a portfolio) depending on focus (with live links)
    * focus is either freelance (service), templates/e-commerce (products), or brand/blog (content)
 * I will pursue all three to different extents _but_ I should focus on one (likely service or product)

## File Structure

This website uses a basic file structure: a single index.html file, connected to a css stylesheet and a script.js. I'd like to keep this website as minimalistic as possible so that it's easy to edit later on.

### index.html

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <script="script.js"></script>
    </body> 
</html>
```

### style.css

```
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
}

* {
    margin: 0;
    box-sizing: border-box;
}
```

### script.js
```
window.onload = function () {
    alert("Hello, World!");
};
```

```


```

---

[^1]
[^2]
[^3]
[^4]
[^5]