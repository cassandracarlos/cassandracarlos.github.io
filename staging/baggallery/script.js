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
                gallery.appendChild(card);
            });
        });
});
