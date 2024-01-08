// Function to fetch and display JSON content
async function fetchAndDisplayData() {
    try {
        const response = await fetch('data.json'); // Replace 'data.json' with your actual JSON file path
        const data = await response.json();
  
        // Build HTML content from JSON
        let htmlContent = '<ul>';
        data.forEach(item => {
            htmlContent += `<li>${item.name} - ${item.description}</li>`;
        });
        htmlContent += '</ul>';
  
        // Display HTML content on the page
        document.getElementById('content').innerHTML = htmlContent;
    } catch (error) {
        console.error('Error fetching or displaying data:', error);
    }
  }
  
  // Call the function to fetch and display data
  fetchAndDisplayData();