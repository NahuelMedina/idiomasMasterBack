const mercadopago = require('mercadopago')
const { MercadoPagoConfig, Preference } = require('mercadopago');
const YOUR_ACCESS_TOKEN = process.env.YOUR_ACCESS_TOKEN;


const client = new MercadoPagoConfig({ accessToken: YOUR_ACCESS_TOKEN });


const createPreference = async (req, res) => {
    try {
        const body = {
            items: [
                {
                    // title: "computadora",
                    // unit_price: 200,
                    // currency_id: "COL",
                    // description: "portatil",
                    // quantity:1,
                    title: req.body.id,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "USD",
                },
            ],
            back_urls: {
                success: "http://localhost:5173/",
                failure: "http://localhost:5173/",
                pending: "http://localhost:5173/",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });
        res.json({
            url: result.init_point,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia :(",
        })
    }
}


module.exports = createPreference;
