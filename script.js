const showImageBtn = document.getElementById('showImageBtn');
const dogImage = document.getElementById('dogImage');

showImageBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImage.src = data.message;
      dogImage.style.display = 'block';
    })
    .catch(error => console.log(error));
});