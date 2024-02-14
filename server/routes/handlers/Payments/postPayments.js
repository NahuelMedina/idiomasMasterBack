const mercadopago = require('mercadopago')
const { MercadoPagoConfig, Preference } = require('mercadopago');
const YOUR_ACCESS_TOKEN = process.env.YOUR_ACCESS_TOKEN;


const client = new MercadoPagoConfig({ accessToken: 'TEST-7877355488208454-021311-c98f95913f7a3b851d728e816e919f58-1679733305' });


const createPreference = async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.description,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "COL",
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
            id: result.id,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia :(",
        })
    }
}


module.exports = createPreference;
