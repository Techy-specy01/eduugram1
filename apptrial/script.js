// Simple authentication using localStorage (for demo purposes)
document.addEventListener('DOMContentLoaded', function() {
    // Login page logic
    if (document.getElementById('loginForm')) {
      document.getElementById('loginForm').onsubmit = function(e) {
        e.preventDefault();
        localStorage.setItem('edu_email', document.getElementById('email').value);
        localStorage.setItem('edu_username', document.getElementById('username').value);
        localStorage.setItem('edu_loggedin', 'true');
        window.location = 'index.html';
      };
    }
  
    // Home page logic
    if (document.getElementById('videoFeed')) {
      // Redirect to login if not logged in
      if (!localStorage.getItem('edu_loggedin')) {
        window.location = 'login.html';
        return;
      }
      document.getElementById('currentUser').textContent = localStorage.getItem('edu_username') || '';
  
      document.getElementById('logoutBtn').onclick = function() {
        localStorage.removeItem('edu_loggedin');
        window.location = 'login.html';
      };
  // Auto-play and pause videos based on scroll position
  const videos = document.querySelectorAll('video');
  window.addEventListener('scroll', function() {
    videos.forEach(video => {
      const rect = video.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isVisible) {
    video.play();
      } else {
    video.pause();
      }
    });
  });
// Correct scroll event listener for infinite scroll
      window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
          loadMoreVideos();
        }
      });
  
      // Infinite scroll
      window.onscroll = function() {
        if (loading) return;
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {
          loading = true;
          setTimeout(() => {
            const more = generateVideos(5, currentTopic);
            loadedVideos = loadedVideos.concat(more);
            renderVideos(more, true);
            loading = false;
          }, 1000);
        }
      };
    }
  });
  