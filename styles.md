styles.md

style="font-weight: bold; margin-top: 15px;"
style="font-size: .9rem;color: #555;"
style="font-weight: bold; margin-top: 5px;"
id="about-me" style="color: #555; margin-bottom: 10px;font-size: .95rem;"



#tools-list a {
    color: #333;
    text-decoration: none;"
}

#tools-list a:hover {
    color: #666;
}

h1 {
    line-height: 1.05;
    font-size: 1.95rem;
    margin-bottom: 1px;
}

/* Make #tech-stack a flex container */
#tech-stack {
    display: flex;
}

/* Add CSS styles to position elements side by side */
#tech-stack div {
    display: flex;
    align-items: center;
    gap: 0px; /* Adjust the gap between the image and text as needed */
    margin-right: 0px; /* Adjust the spacing between the inner divs as needed */
}

#tech-stack img {
    max-width: 36px; /* Limit the image width as needed */
}

.container {
    border: 1.5px solid #333;
    padding: 30px 56px;
    margin: 8px;
}

main {
    max-width: 75%;
    margin: 0 auto;
    border: 3.5px solid #222;
}

ul {
    /*margin: 15px 0;*/
    /*list-style-type: none;*/
    /*padding: 0;*/
}

#about-me a {
    color: #333;
}

form {
    display: block;
    margin: 15px 0;
}

textarea, input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    display: block;
    font-family: 'Poppins', sans-serif;
}

@media only screen and (max-width: 900px) {
    main {
        max-width: 90%;
    }
    .container {
        padding: 30px 36px;
    }
  }