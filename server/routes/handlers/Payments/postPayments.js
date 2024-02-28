const { MercadoPagoConfig, Preference, Payment } = require("mercadopago");
const createPayment = require("../createPayment");
const YOUR_ACCESS_TOKEN = process.env.YOUR_ACCESS_TOKEN;

const client = new MercadoPagoConfig({ accessToken: YOUR_ACCESS_TOKEN });

const createPreference = async (req, res) => {
  console.log(req.body);
  let body = {};
  try {
    if (req.body.language) {
      body = {
        items: [
          {
            // title: "computadora",
            // unit_price: 200,
            // currency_id: "COL",
            // description: "portatil",
            // quantity:1,
            title: req.body.language + " " + req.body.level,
            quantity: 1,
            unit_price: Number(req.body.price),
            currency_id: "USD",
          },
        ],
        metadata: {
          course_id: req.body._id,
        },
        back_urls: {
          success: `http://localhost:5173/detail/${req.body._id}`,
          failure: "http://localhost:5173/",
          pending: "http://localhost:5173/",
        },
        auto_return: "approved",
      };
    } else {
      body = {
        items: [
          {
            // title: "computadora",
            // unit_price: 200,
            // currency_id: "COL",
            // description: "portatil",
            // quantity:1,
            title: "Producto en Carrito",
            quantity: 1,
            unit_price: Number(req.body.price),
            currency_id: "USD",
          },
        ],
        metadata: {
          courses: req.body.coursesCart,
        },
        back_urls: {
          success: `http://localhost:5173/cart`,
          failure: "http://localhost:5173/",
          pending: "http://localhost:5173/",
        },
        auto_return: "approved",
      };
    }

    const preference = new Preference(client);
    const { init_point } = await preference.create({ body });
    res.json(init_point);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al crear la preferencia :(",
    });
  }
};

module.exports = createPreference;
