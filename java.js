
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    const wrapper = document.getElementById("animationWrapper");
    const message = document.getElementById("messageSection");
    if (wrapper && message) {
      setTimeout(() => {
        wrapper.classList.add("shrink");
      }, 5000);
      
      setTimeout(() => {
        if (document.querySelector('.background-flowers')) {
          document.querySelector('.background-flowers').innerHTML = '';
          createBackgroundFlowers();
        }
        if (document.querySelector('.arc-images')) {
          document.querySelector('.arc-images').innerHTML = '';
          createArcImages();
        }
      }, 100);

      function createArcImages() {
        const arc = document.querySelector('.arc-images');
        if (!arc) return;
        arc.innerHTML = ""; // Clear old images
      
        const imageFiles = [
          'images/IMG_8008.JPG',
          'images/IMG_9349.JPG',
          'images/d14f21fb982ffcb27f413758d77e6a61.jpeg',
          'images/einstein (Facebook Cover).zip - 1.png'
        ];
        const N = imageFiles.length;
      
        // Use fallback if arc container is not yet sized
        let width = arc.offsetWidth || window.innerWidth;
        let height = arc.offsetHeight || window.innerHeight * 0.25;
      
        const centerX = width / 2;
        const centerY = height * 0.9;
        const radius = Math.min(width, height) * 0.45;
        let thetaStart = -Math.PI * 0.8;
        let thetaEnd = -Math.PI * 0.2;
        let thetaStep = (thetaEnd - thetaStart) / (N - 1);
      
        imageFiles.forEach((src, i) => {
          const img = document.createElement('img');
          img.src = src;
          img.className = 'arc-image';
          arc.appendChild(img);
        });
      
        let t = 0;
        function animateArc() {
          t += 0.012;
          const imgs = arc.querySelectorAll('.arc-image');
          imgs.forEach((img, i) => {
            let theta = thetaStart + thetaStep * i + t;
            let x = centerX + radius * Math.cos(theta) - img.offsetWidth / 2;
            let y = centerY + radius * Math.sin(theta) - img.offsetHeight / 2;
            img.style.left = x + 'px';
            img.style.top = y + 'px';
            img.style.opacity = (Math.sin(theta + Math.PI/2) + 1.1) / 2.2;
          });
          requestAnimationFrame(animateArc);
        }
        animateArc();
      }

      setTimeout(() => {
        message.classList.add("show");
      }, 7000);
    }
  };