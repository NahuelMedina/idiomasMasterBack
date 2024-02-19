const { MercadoPagoConfig, Payment } = require("mercadopago");

const YOUR_ACCESS_TOKEN = process.env.YOUR_ACCESS_TOKEN;

const client = new MercadoPagoConfig({ accessToken: YOUR_ACCESS_TOKEN });

const getDataPayment = async (paymentId) => {
  const payment = await new Payment(client).get({ id: paymentId });

  payment.metadata.course_id
    ? {
        date_created: payment.date_created,
        transaction_amount: payment.transaction_amount,
        status: payment.status,
        payer: payment.payer,
        course_id: payment.metadata.course_id,
      }
    : {
        date_created: payment.date_created,
        transaction_amount: payment.transaction_amount,
        status: payment.status,
        payer: payment.payer,
        course_id: payment.metadata.courses,
      };
};

module.exports = getDataPayment;

