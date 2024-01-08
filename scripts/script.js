// Fetch the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Populate the title
    document.getElementById('title').innerText = data.title;

    // Populate the additional content
    document.getElementById('additionalContent').innerText = data.additionalContent;

    // Populate the content
    document.getElementById('content').innerHTML = data.content;
  })
  .catch(error => console.error('Error:', error));

/*
  // Fetch the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Populate the title
    document.getElementById('title').innerText = data.title;

    // Populate the menu
    const menu = document.getElementById('menu');
    data.menu.forEach(item => {
      const menuItem = document.createElement('a');
      menuItem.href = item.link;
      menuItem.textContent = item.label;
      menu.appendChild(menuItem);
    });

    // Populate the main content
    document.getElementById('content').innerHTML = data.content;

    // Loop through additional content sections
    data.additionalContent.forEach(section => {
      const additionalContentElement = document.createElement('div');
      additionalContentElement.innerHTML = `<h2>${section.title}</h2>${section.content}`;
      document.getElementById('additionalContent').appendChild(additionalContentElement);
    });
  })
  .catch(error => console.error('Error:', error));
