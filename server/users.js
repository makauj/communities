//User related code
import { getUser, createUser } from './user.js';

//Post related code
import { getPost, createPost } from './post.js';

// Example usage
const user = createUser('Alice');
console.log(getUser(user.id));
const post = createPost(user.id, 'Hello World!');
console.log(getPost(post.id));
