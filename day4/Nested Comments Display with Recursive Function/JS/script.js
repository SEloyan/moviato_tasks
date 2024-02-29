const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: []
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: []
    },
];

function generateCommentHTML(comment, nestingLevel) {
    const indent = nestingLevel * 20;
    const commentHTML = `<div class="comment" style="margin-left: ${indent}px">${comment.text}</div>`;
    
    if (comment.replies.length > 0) {
        const repliesHTML = comment.replies.map(reply => generateCommentHTML(reply, nestingLevel + 1)).join('');
        return commentHTML + repliesHTML;
    } else {
        return commentHTML;
    }
}

function renderComments(commentsArray) {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = commentsArray.map(comment => generateCommentHTML(comment, 0)).join('');
}

window.addEventListener('load', () => {
    renderComments(comments);
});