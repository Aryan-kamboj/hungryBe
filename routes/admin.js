const express = require('express');
const router = express.Router();
const dish = require('../models/dishes');
const createDb = async (req, res) => {
    // const data = 
    // [
    //     {
    //         "itemName": "Burger",
    //         "price": 8.75,
    //         "vegetarian": false,
    //         "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644584/samples/food/amirali-mirhashemian-sc5sTPMrVfk-unsplash_pzsaim.jpg",
    //         "restro": "Restaurant A",
    //         "rating": 4.2,
    //         "distance": 3
    //     },
    //     {
    //         "itemName": "Salad",
    //         "price": 7.21,
    //         "vegetarian": true,
    //         "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644587/samples/food/monika-grabkowska-pCxJvSeSB5A-unsplash_tuvfa0.jpg",
    //         "restro": "Restaurant B",
    //         "rating": 4.5,
    //         "distance": 5
    //     },
    //     {
    //         "itemName": "Pizza",
    //         "price": 9.89,
    //         "vegetarian": false,
    //         "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644587/samples/food/saahil-khatkhate-kfDsMDyX1K0-unsplash_asu5se.jpg",
    //         "restro": "Restaurant C",
    //         "rating": 3.8,
    //         "distance": 2
    //     },
    //     {
    //         "itemName": "Pasta",
    //         "price": 11.45,
    //         "vegetarian": true,
    //         "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644583/samples/food/ben-lei-flFd8L7_B3g-unsplash_xtonhf.jpg",
    //         "restro": "Restaurant A",
    //         "rating": 4.0,
    //         "distance": 4
    //     },
    //     {
    //         "itemName": "Sandwich",
    //         "price": 6.33,
    //         "vegetarian": true,
    //         "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644584/samples/food/eiliv-aceron-mAQZ3X_8_l0-unsplash_vk77rv.jpg",
    //         "restro": "Restaurant B",
    //         "rating": 4.7,
    //         "distance": 3
    //     },
    //     {
    //         "itemName": "Soup",
    //         "price": 5.99,
    //         "vegetarian": true,
    //         "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644587/samples/food/monika-grabkowska-_y6A9bhILkM-unsplash_tdyv4r.jpg",
    //         "restro": "Restaurant C",
    //         "rating": 4.3,
    //         "distance": 6
    //     },
    //     {
    //         "itemName": "Sushi",
    //         "price": 12.55,
    //         "vegetarian": false,
    //         "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644588/samples/food/vinicius-benedit--1GEAA8q3wk-unsplash_zj66ew.jpg",
    //         "restro": "Restaurant A",
    //         "rating": 4.9,
    //         "distance": 1
    //     },
    //     {
    //         "itemName": "Fries",
    //         "price": 4.25,
    //         "vegetarian": true,
    //         "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644584/samples/food/louis-hansel-vi0kZuoe0-8-unsplash_m0csok.jpg",
    //         "restro": "Restaurant B",
    //         "rating": 4.1,
    //         "distance": 5
    //     },
    //     {
    //         "itemName": "Taco",
    //         "price": 8.10,
    //         "vegetarian": false,
    //         "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644590/samples/food/the-nix-company-61wG5-SAF_Y-unsplash_zogrqz.jpg",
    //         "restro": "Restaurant C",
    //         "rating": 4.6,
    //         "distance": 2
    //     },
    //     {
    //         "itemName": "Omelette",
    //         "price": 6.75,
    //         "vegetarian": true,
    //         "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644584/samples/food/igor-miske-N0u8bLrB_-g-unsplash_vlehoj.jpg",
    //         "restro": "Restaurant A",
    //         "rating": 4.4,
    //         "distance": 4
    //     }
    // ]
      try {
        // await dish.insertMany(data);
        console.log('Data inserted successfully');
        const dishes = await dish.find({});
        return res.status(200).json(dishes);
      }
        catch (error) {
        console.error('Error inserting data:', error);
    }
  };
module.exports = createDb ;
  
