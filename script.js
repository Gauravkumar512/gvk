window.onload = () => {
    
    document.querySelectorAll(".category").forEach(category => {
      category.addEventListener("mouseenter", () => {
        gsap.to(category, { scale: 1.05, duration: 0.3 });
      });
      category.addEventListener("mouseleave", () => {
        gsap.to(category, { scale: 1, duration: 0.3 });
      });
    });
  
    
    document.querySelectorAll(".post").forEach(post => {
      post.addEventListener("mouseenter", () => {
        gsap.to(post, { scale: 1.05, duration: 0.3 });
      });
      
      post.addEventListener("mouseleave", () => {
        gsap.to(post, { scale: 1, duration: 0.3 });
      });
    });
  };
  