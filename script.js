// JavaScript to display the current year
document.getElementById('year').textContent = new Date().getFullYear();

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Function to create moving particles
const createParticles = (count) => {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 5 + 5; // Random size between 5px and 10px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random move duration
        
        document.body.appendChild(particle);
    }
};

// Create 50 particles
createParticles(50);