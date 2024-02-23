import express from 'express';
import axios from 'axios';
import { readFile } from "fs/promises";

const router = express.Router();
const CMS_DOMAIN = 'http://localhost:8080';
const catalogCopy = JSON.parse(
    await readFile(new URL("../catalog-content.json", import.meta.url)) // mocked data of CMS "Catalog" Page
);

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
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data.map(product => {
        return {
            id: product.id.toString(),
            title: product.title,
            image: product.image,
            description: product.description,
            price: product.price.toString()
        };
    }).slice(0, 3);

    return products;
}

// Retrieve banner & products from CMS
const getCmsData = async (mock = false) => {
    let response = {};
    let imageDomain = "";

    if (mock) {
        response.data = catalogCopy;
        imageDomain = "https://images.pexels.com";
    } else {
        imageDomain = CMS_DOMAIN;
        response = await axios.get(`${CMS_DOMAIN}/content/luna/pages/Catalog.infinity.json`, {
            auth: {
                username: 'wsadmin',
                password: 'wsadmin'
            }
        });
    }

    // Products
    const mainContainer = response.data['jcr:content'].rootcontainer.maincontainer;
    const productsRawContent = mainContainer.pagesection_2.cardslist;
    let products = [];
    for (const key of Object.keys(productsRawContent)) {
        if (products.length >= 3) { // return ONLY the first 3 products
            break;
        } else {
            if (/card_[0-9]+/.test(key)) {
                const imageURL = imageDomain + productsRawContent[key].image;
                products.push({ id: key, title: productsRawContent[key].title, image: imageURL, description: productsRawContent[key].content })
            }
        }
    }

    // Banner
    const bannerRawContent = mainContainer.pagesection_6;
    const imageURL = imageDomain + bannerRawContent.image.lgImageSrc;
    const banner = { title: bannerRawContent.title.title, image: imageURL };

    return { products, banner };
}

router.get('/content', async (req, res) => {
    try {
        const posts = await getPosts();
        const products = await getProducts();
        const cmsData = await getCmsData(true); // to use mock data add "true" as a parameter
        res.status(200).json({ posts: posts, products: products.concat(cmsData.products), banner: cmsData.banner });
    } catch (error) {
        res.status(500).json({ message: "Error fetching data from API", error: error.message });
    }
})

export default router;