document.querySelector('.btn').addEventListener('mouseover', function() {
    this.textContent = 'Нажми на меня';
});

document.querySelector('.btn').addEventListener('mouseout', function() {
    this.textContent = 'Узнать больше';
});

document.querySelector('.card').addEventListener('mouseover', function() {
    this.style.backgroundImage = 'url("image3.png")';
});

