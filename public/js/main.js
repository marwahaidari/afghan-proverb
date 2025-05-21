// public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-btn');
  
    deleteButtons.forEach(button => {
      button.addEventListener('click', async () => {
        const li = button.closest('.proverb-item');
        const postId = li.getAttribute('data-id');
  
        if (confirm('Are you sure you want to delete this post?')) {
          try {
            await axios.post(`/post/${postId}/delete`);
            li.remove();
          } catch (err) {
            console.error(err);
            alert('Error deleting post');
          }
        }
      });
    });
  });
  