function pop (e) {
    //如果使用键盘点击
    if (e.clientX === 0 && e.clientY === 0) {
        const bbox = document.querySelector('#button').getBoundingClientRect();
        const x = bbox.left + bbox.width / 2;
        const y = bbox.top + bbox.height / 2;
        for (let i = 0; i < 30; i++) {
        // We call the function createParticle 30 times
        // We pass the coordinates of the button for x & y values
            createParticle(x, y);
        }
    } else {
        for (let i = 0; i < 30; i++) {
        //调用此函数30次
        //传递鼠标的坐标
            createParticle(e.clientX, e.clientY);
        }
    }
}
  
function createParticle (x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    
    //随机大小
    const size = Math.floor(Math.random() * 20 + 5);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    //在蓝色/紫色调色板中生成随机颜色
    particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
    
    // Generate a random x & y destination within a distance of 75px from the mouse
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;
  
    // Store the animation in a variable as we will need it later
    const animation = particle.animate([
      {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        opacity: 1
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0
      }
    ], {
      // Set a random duration from 500 to 1500ms
      duration: Math.random() * 1000 + 500,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      // Delay every particle with a random value of 200ms
      delay: Math.random() * 200
    });
    
    //动画结束后移除元素
    animation.onfinish = () => {
      particle.remove();
    };
}

function init(){
    document.body.addEventListener('click', pop)
}

export default init