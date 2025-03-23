// Get all the accordion items
const faqItems = document.querySelectorAll('.faq-accordion-item');

// Loop through each item and add an event listener
faqItems.forEach(item => {
    item.querySelector('.faq-accordion-button').addEventListener('click', () => {
        // Remove the background color from all items
        faqItems.forEach(i => {
            i.classList.remove('active');
        });

        // Add the background color to the clicked item
        item.classList.add('active');
    });
});


