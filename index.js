// MOCKAR DATA
const dataBase = {
  users :[{
    id:1,
    username:"Alfredo",
  }],
  posts:[{
    id:1,
    owner : "Alfredo",
    content:"Old post"
  }]
}

// CREATE

function createPost(data){
  dataBase.posts.push({
    id:dataBase.posts.length+1,
    owner:data.owner,
    content:data.content
  })
}
createPost({owner:"Manuel",content:"Newpost"});
createPost({owner:"Chivela",content:"Newpost1"});

// READ
function getPost(){
  return dataBase.posts;
}
console.log("--- Get All Post ---")
console.table(getPost());

function getPostById(data){
 const post = dataBase.posts.find((post)=> post.id == data.id)
  return post;
}
console.log("--- Get Post ---")
console.table(getPostById({id:2}));

function updatePost(data){
  const post = dataBase.posts.find((post)=>post.id == data.id)
  post.content =data.content;
  return post;
}
console.log(updatePost({id:1,content:"content updated"}))
console.log("--- Get All Post ---")
console.table(getPost());
