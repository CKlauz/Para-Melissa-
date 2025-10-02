// Defina a data do evento (exemplo: 19 de outubro de 2025, 23:59:59)
const eventDate = new Date("Oct 19, 2025 00:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const difference = eventDate - now;

  // Cálculos
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Atualiza o HTML
  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

  // Caso o evento já tenha passado
  if (difference < 0) {
    document.getElementById("timer").innerHTML = "O evento já começou! 🎉";
  }
}

// Atualiza a cada 1 segundo
setInterval(updateTimer, 1000);

// Carrossel de Imagens
let currentImg = 0;
let imgs;

function showImage(index) {
  if (!imgs) {
    imgs = document.querySelectorAll('.carousel-img');
  }
   imgs.forEach((img, i) => {
    img.classList.remove('active');
    img.style.display = 'none';
  });
    imgs[index].classList.add('active');
    imgs[index].style.display = 'block';
}

function prevImage() {
  if (!imgs) {
    imgs = document.querySelectorAll('.carousel-img');
  }
  currentImg = (currentImg - 1 + imgs.length) % imgs.length;
  showImage(currentImg);
}

function nextImage() {
  if (!imgs) {
    imgs = document.querySelectorAll('.carousel-img');
  }
  currentImg = (currentImg + 1) % imgs.length;
  showImage(currentImg);
}

document.addEventListener('DOMContentLoaded', function() {
  imgs = document.querySelectorAll('.carousel-img');
  if (imgs.length > 0) {
    showImage(currentImg);
  }
  // Rotação automática do carrossel
  setInterval(function() {
    nextImage();
  }, 4000);
});
