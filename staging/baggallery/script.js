document.addEventListener('DOMContentLoaded', function() {
    fetch('handbags.txt')
        .then(response => response.text())
        .then(data => {
            const gallery = document.querySelector('.gallery');
            gallery.innerHTML = '';
            const lines = data.trim().split(/\n+/);
            lines.forEach(line => {
                if (!line.trim()) return; // Skip empty lines
                const [name, img, desc] = line.split('|');
                if (!name || !img || !desc) return; // Skip incomplete entries
                const card = document.createElement('div');
                card.className = 'bag-card';
                card.innerHTML = `
                    <img src="${img}" alt="${name}">
                    <div class="bag-desc"><strong>${name}</strong> - ${desc}</div>
                `;
                // Add click event to show popup
                card.querySelector('img').addEventListener('click', function() {
                    showPopup(img, name);
                });
                gallery.appendChild(card);
            });

            // Popup logic
            function showPopup(imgSrc, altText) {
                const overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100vw';
                overlay.style.height = '100vh';
                overlay.style.background = 'rgba(0,0,0,0.7)';
                overlay.style.display = 'flex';
                overlay.style.alignItems = 'center';
                overlay.style.justifyContent = 'center';
                overlay.style.zIndex = '9999';

                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = altText;
                img.style.maxWidth = '90vw';
                img.style.maxHeight = '90vh';
                // No boxShadow or border

                overlay.appendChild(img);

                // Close popup when clicking anywhere
                overlay.addEventListener('click', function() {
                    document.body.removeChild(overlay);
                });

                document.body.appendChild(overlay);
            }
        });
});
