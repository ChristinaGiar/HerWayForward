import express from 'express';
import axios from 'axios';

const router = express.Router();

// Retrieve posts from Typicode API
const getPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data.map(post => {
        return { id: post.id, title: post.title, body: post.body }
    }).slice(0, 3); // return ONLY the first 3 posts

    return posts;
}

// Retrieve products from E-commerce API
const getProducts = async () => {
    /*********** Add your code here ***********/
    return [];
}


router.get('/content', async (req, res) => {
    try {
        const posts = await getPosts();
        const products = await getProducts();
        res.status(200).json({ posts: posts, products: products });
    } catch (error) {
        res.status(500).json({ message: "Error fetching data from API", error: error.message });
    }
})

export default router;