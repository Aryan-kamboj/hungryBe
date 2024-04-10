const dish = require('../models/dishes');
exports.fetchAllDishes = async(req,res)=> {
    try{
        const dishes = await dish.find({});
        return res.status(200).json(dishes);
    }
   catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ message: error }); 
  }
}
exports.vegitarianDishes = async(req,res) => {
  try {
    const vegetarianDishes = await dish.find({ vegetarian: true });
    res.json(vegetarianDishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.nonVegitarianDishes = async (req, res) => {
    try {
      const nonVegetarianDishes = await dish.find({ vegetarian: false });
      res.json(nonVegetarianDishes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  