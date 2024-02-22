const Cart = require("../../database/models/Cart");

const addCartProduct = async (req, res) => {
  try {
    const { CourseId, CartId } = req.body;

    let cart = await Cart.findById(CartId);

    if (!cart) {
      return res.status(404).send("Cart doesn't exist");
    }

   
    const courseExists = cart.courses.some(course => course.equals(CourseId));
    if (courseExists) {
      return res.status(400).send("Course already exists in the cart");
    }

  
    cart.courses.push(CourseId);
    await cart.save();

    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = addCartProduct;
