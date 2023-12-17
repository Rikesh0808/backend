const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getSingleProductReviews,
  deleteProductReview,
  getAllProductsAdmin,
  recommendedProduct,
  recommendedProductsCatgory,
} = require("../controller/ProductController");
const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);

router
    .route("/admin/products").get(isAuthenticatedUser, authorizedRoles("admin"), getAllProducts);

// dashboard ko lagi api
router
    .route("/admin/products/all").get(isAuthenticatedUser, authorizedRoles("admin"), getAllProductsAdmin);

router
  .route("/product/recommend")
  .get(recommendedProduct);


// recommendation algorithm route
router
  .route("/product/recommend/:category")
  .get(isAuthenticatedUser,recommendedProductsCatgory);
  
router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createProduct);

router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct);

router
  .route("/product/:id")
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct)
  .get(getSingleProduct);

router.route("/product/reviews").post(isAuthenticatedUser, createProductReview);
router
  .route("/reviews")
  .get(getSingleProductReviews)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProductReview);

module.exports = router;
