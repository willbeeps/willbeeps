  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const filterButtons = document.querySelectorAll('.filter-button');
      const posts = document.querySelectorAll('.post');
      
      // Filter functionality
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          button.classList.add('active');
          
          const category = button.dataset.category;
          
          // Filter posts
          posts.forEach(post => {
            const postCategories = post.dataset.categories;
            
            if (category === 'all' || postCategories.includes(category)) {
              post.classList.remove('hidden');
            } else {
              post.classList.add('hidden');
            }
          });
        });
      });
    });
  </script>