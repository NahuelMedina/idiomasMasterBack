const { Router } = require('express');
const createUser = require('./handlers/createUser');
const createCourse = require("./handlers/createCourse")
const getUser = require('./handlers/getUser');
const createReview = require("./handlers/createReview")
const createPayment = require("./handlers/createPayment")
const getReviews = require("./handlers/getReviews");
const getUserReviews = require('./handlers/getUserReviews');
const getCourseReviews = require('./handlers/getCourseReviews');
const getCourseByID = require('./handlers/getCourse');
const routes = Router()

routes.post("/createUser", createUser);
routes.post("/createCourse", createCourse);
routes.post("/createReview", createReview);
routes.post("/createPayment", createPayment)
routes.get("/getUser", getUser);
routes.get("/getReviews/:id", getReviews);
routes.get("/getUserReviews/:id", getUserReviews);
routes.get("/getCourseReviews/:id", getCourseReviews);
routes.get("/getCourse/:id", getCourseByID)


module.exports = routes;