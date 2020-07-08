// ShortCode With ES6 Arrow Function 
// const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.images img')];

// imgs.forEach(img => img.addEventListener('click', e => (current.src =  e.target.src)));

// ES5 JavaScript Function 
const current = document.getElementById('current');
const imgs = document.querySelectorAll('.images img');


const opacity = 0.4;  // Default Opacity  
imgs[0].style.opacity = opacity;  // First Image Opacity


imgs.forEach(function(img){
    img.addEventListener('click', function(e){         
        imgs.forEach(img => img.style.opacity = 1);  // Reset Opacity        
        current.src = e.target.src;                  // Current Image SRC Change        
        e.target.style.opacity = opacity;            // Change Current Opacity        
        current.classList.add('fade-in');            // Add Fade In Class

        // Remove Fade In Class After .5 Second.
        setTimeout(function(){
            current.classList.remove('fade-in');
        },500);

        
        
    });
});




