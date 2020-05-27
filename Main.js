const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set First img Opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e)
{
    // Reset The Opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // Change Current Image to Src of Clicked Image
    current.src = e.target.src;

    // Add fade in Class
    current.classList.add('fade-in');

    // Remove fade-in class after 0.5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the Opacity to opacity var
    e.target.style.opacity = opacity;
}