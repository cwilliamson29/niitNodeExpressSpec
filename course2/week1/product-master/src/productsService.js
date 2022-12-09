// Import the necessary dependencies
const lodash = require("lodash");
const productsList = require("./products.json").products;

const getProducts = () => {
	// get all products
};

const getProductsById = (productId, done) => {
	let product = null;
	let error = null;
	// get a product by ID
	product = productsList.filter((x) => x.id === parseInt(productId));

	if (products[0] === undefined) {
		error = "Requested product not found";
	}

	return done(null, JSON.stringify(product[0]));
};

const saveProduct = (newProduct, done) => {
	// save a product
	return done(null, JSON.stringify(productsList));
};

const updateProduct = (productId, updateData, done) => {
	let updatedProductList = null;
	// update the product list
	done(null, JSON.stringify(updatedProductList));
};

const deleteProduct = (productId, done) => {
	// delete a product
	done(null, JSON.stringify(productsList));
};

module.exports = {
	getProducts,
	getProductsById,
	saveProduct,
	updateProduct,
	deleteProduct,
};
