 // JavaScript for Modal Functionality
 //       function openModal(name, type, color, description, year, imageSrc) {
 //           document.getElementById('modalImage').src = imageSrc;
 //           document.getElementById('modalName').textContent = name;
 //           document.getElementById('modalType').textContent = type;
 //           document.getElementById('modalColor').textContent = color;
 //           document.getElementById('modalDescription').textContent = description;
 //           document.getElementById('modalYear').textContent = year;
 //           document.getElementById('myModal').style.display = 'flex';
 //           document.body.style.overflow = 'hidden';
 //       }

 //       function closeModal() {
 //           document.getElementById('myModal').style.display = 'none';
 //           document.body.style.overflow = 'auto';
 //       }

        // Close modal when clicking outside of it
 //       window.onclick = function(event) {
 //           const modal = document.getElementById('myModal');
 //           if (event.target === modal) {
 //               closeModal();
 //           }
 //       };



// ==================== Get Modal Element Once =======================
const modal = document.getElementById('myModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalType = document.getElementById('modalType');
const modalColor = document.getElementById('modalColor');
const modalDescription = document.getElementById('modalDescription');
const modalYear = document.getElementById('modalYear');
const closeBtn = modal.querySelector('.close');

//======== Open modal (Called via event delegation) ========
function openModal(data) {
    modalImage.src = data.image;
    modalImage.alt = data.name;

    modalName.textContent = data.name;
    modalType.textContent = data.type;
    modalColor.textContent = data.color;
    modalDescription.textContent = data.description;
    modalYear.textContent = data.years;

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

//====== Close Modal Function ======
function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

//====== Image Grid Clock Handler (Event Delegation) ======
document.querySelector('.image-grid').addEventListener('click', (e) => {
    const item = e.target.closest('.image-item');
    if (!item) return; // Clicked outside an image item

    openModal ({
        name: item.dataset.name,
        type: item.dataset.type,
        color: item.dataset.color,
        description: item.dataset.description,
        years: item.dataset.years,
        image: item.dataset.image
    });
});

// ===== Close Modal Event Listeners =====

// Close Button
closeBtn.addEventListener('click', closeModal);

// Close outside Modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
    });

    // Esc key support
    document.addEventListener('click', (e) => {
        if(e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

