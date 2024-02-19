const Cart = require("../../database/models/Cart");

const addCartProduct = async (req, res) => {
  try {
    const { CourseId, CartId } = req.body;

    let cart = await Cart.findById(CartId);

    if (!cart) {
      return res.status(404).send("Cart doesn't exist");
    }

    // Verificar si el curso ya está en el carrito
    const courseExists = cart.courses.some(course => course.equals(CourseId));
    if (courseExists) {
      return res.status(400).send("Course already exists in the cart");
    }

    // Agregar el curso al carrito
    cart.courses.push(CourseId);
    await cart.save();

    return res.status(200).send("Course added to the cart successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = addCartProduct;
