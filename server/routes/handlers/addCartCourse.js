const addCartProduct = async (req, res) => {
  try {
    const { CoursesArray, CartId } = req.body;

    let cart = await Cart.findById(CartId);

    if (!cart) {
      return res.status(404).send("Cart doesn't exist");
    }

    // Verificar si el estado del carrito es 'shopped'
    if (cart.status === 'shopped') {
      return res.status(400).send("Cannot modify a shopped cart");
    }

    // Agregar el curso al carrito
    cart.courses = CoursesArray || [];
    await cart.save();

    return res.status(200).json(cart);

  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = addCartProduct;
