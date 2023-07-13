const { Router } = require("express");
const { getProduct } = require("../controllers/ProductControllers");

const router = Router();
router.get("/product", getProduct);

module.exports = router;
