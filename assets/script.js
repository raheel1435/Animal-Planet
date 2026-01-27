 // JavaScript for Modal Functionality
        function openModal(name, type, color, description, year, imageSrc) {
            document.getElementById('modalImage').src = imageSrc;
            document.getElementById('modalName').textContent = name;
            document.getElementById('modalType').textContent = type;
            document.getElementById('modalColor').textContent = color;
            document.getElementById('modalDescription').textContent = description;
            document.getElementById('modalYear').textContent = year;
            document.getElementById('myModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('myModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside of it
        window.onclick = function(event) {
            const modal = document.getElementById('myModal');
            if (event.target === modal) {
                closeModal();
            }
        };