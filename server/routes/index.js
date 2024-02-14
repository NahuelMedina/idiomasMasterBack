const { Router } = require("express");
const createUser = require("./handlers/createUser");
const createCourse = require("./handlers/createCourse");
const getUser = require("./handlers/getUser");
const createReview = require("./handlers/createReview");
const createPayment = require("./handlers/createPayment");
const getReviews = require("./handlers/getReviews");
const getUserReviews = require("./handlers/getUserReviews");
const getCourseReviews = require("./handlers/getCourseReviews");
const getCourseByID = require("./handlers/getCourse");
const getCourseByName = require("./handlers/getCourseName");
const getUserCourses = require("./handlers/getUserCourses");
const getPaymentById = require("./handlers/getPaymentById");
const getPaymentUser = require("./handlers/getPaymentUser");
const getPaymentCourse = require("./handlers/getPaymentCourse");
const deleteReview = require("./handlers/deleteReview");
const deleteCourse = require("./handlers/deleteCourse");
const deleteUser = require("./handlers/deleteUser");
const putReview = require("./handlers/putReview");
const putUser = require("./handlers/putUser");
const putPayment = require("./handlers/putPayment");
const putCourse = require("./handlers/putCourse");
const AddUserCourse = require("./handlers/addUserCourse");
const deleteUserCourse = require("./handlers/deteleUserCourse");
const getAllCourses = require("./handlers/getAllCourse");
const getCourseFilters = require("./handlers/getCourseFilters");
const createPreference = require('./handlers/Payments/postPayments')
// const getSuccess = require("./handlers/Payments/getSuccess");
// const getWebhook = require("./handlers/Payments/getWebHook");

const routes = Router();


routes.post("/createUser", createUser);
routes.post("/createCourse", createCourse);
routes.post("/createReview", createReview);
routes.post("/createPayment", createPayment);
routes.post("/getUser", getUser);
routes.get("/getReviews/:id", getReviews);
routes.get("/getUserReviews/:id", getUserReviews);
routes.get("/getCourseReviews/:id", getCourseReviews);
routes.get("/getCourse/name", getCourseByName);
routes.get("/getCourse/:id", getCourseByID);
routes.get("/getUserCourses/:id", getUserCourses);
routes.get("/getPayment/:id", getPaymentById);
routes.get("/getUserPayment/:id", getPaymentUser);
routes.get("/getCoursePayment/:id", getPaymentCourse);
routes.delete("/deleteReview/:id", deleteReview);
routes.put("/putDeleteCourse/:id", deleteCourse);
routes.put("/deleteUser/:id", deleteUser);
routes.put("/putReview", putReview);
routes.put("/putUser", putUser);
routes.put("/putCourse", putCourse);
routes.put("/putPayment", putPayment);
routes.put("/addUserCourse", AddUserCourse);
routes.put("/deleteUserCourse", deleteUserCourse);
routes.get("/getAllCourses", getAllCourses);
routes.get("/getCourseFilters", getCourseFilters);
routes.post("/create_preference", createPreference);
// routes.get("/success", getSuccess);
// routes.get("/webhook", getWebhook);


module.exports = routes;

