class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }
  addDescription() {
    var description_paragraph = document.createElement('p');
    description_paragraph.setAttribute('id', 'blog-description');
    document.getElementById('card-text').appendChild(description_paragraph);
    description_paragraph.innerHTML += this.description;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
function helperAddPost() {
  const pop = document.getElementById('popupContact');
  pop.style.display = 'block';
}
// 2. `helperPost()`

function helperPost()
{
  const title = document.getElementById('title').value;
  const description = document.getElementById('detail').value;
  console.log(title,description);
  const newBlog =new Blog(title,description);
  newBlog.addTitle();
  newBlog.addDescription();
}
