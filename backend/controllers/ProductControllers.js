const ProductModel = require("../models/ProductModel");

module.exports.getProduct = async (req, res) => {
  const products = await ProductModel.find();
  res.status(201).json({
    data: products,
  });
};

module.exports.saveProduct = (req, res) => {
  const { products } = req.body;
  ProductModel.create({ products })
    .then((data) => {
      console.log("Saved successfully...");
      res.status(201).json({ message: "Saved successufully ...", data: data });
    })
    .catch((err) => {
      res.status(501).json({ error: err, message: "Something went wrong" });
    });
};

module.exports.updateProducts = (req, res) => {
  const { id } = req.params;
  const { products } = req.body;
  ProductModel.findByIdAndUpdate(id, { products })
    .then(() => {
      console.log("update successfully...");
      res.status(201).json({ message: "Saved successufully ..." });
    })
    .catch((err) => {
      res.status(501).json({ error: err, message: "Something went wrong" });
    });
};
