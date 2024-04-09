// write your code here
document.addEventListener('DOMContentLoaded', () => {
    const cardTitle = document.getElementById('card-title');
    const cardImage = document.getElementById('card-image');
    const likeCount = document.getElementById('like-count');
    const likeButton = document.getElementById('like-button');
    const commentsList = document.getElementById('comments-list');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment');
  
    // Fetch image and comments from the server
    fetch('http://localhost:3000/images/1')
      .then(response => response.json())
      .then(data => {
        // Updates image title and source
        cardTitle.innerText = data.title;
        cardImage.src = data.image;
  
        // Updates like count
        likeCount.innerText = `${data.likes} likes`;
  
        // Updates comments
        commentsList.innerHTML = ''; // Clear existing comments
        data.comments.forEach(comment => {
          const li = document.createElement('li');
          li.innerText = comment.content;
          commentsList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching image and comments:', error));
  
    // Event listener for like button
    likeButton.addEventListener('click', () => {
      // Increment like count (dummy implementation)
      let currentLikes = parseInt(likeCount.innerText);
      likeCount.innerText = `${currentLikes + 1} likes`;
    });
  
    // Event listener for comment form submission
    commentForm.addEventListener('submit', event => {
      event.preventDefault();
      const newComment = commentInput.value.trim();
      if (newComment !== '') {
        // Add new comment to the server (dummy implementation)
        const li = document.createElement('li');
        li.innerText = newComment;
        commentsList.appendChild(li);
        commentInput.value = ''; // Clear the input field
      }
    });
  });
  