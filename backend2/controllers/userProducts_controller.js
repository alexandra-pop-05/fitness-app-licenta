const db = require("../db");
/* 
const addProductToUser = async (req, res) => {
  // Create a new row in the userproducts table to store the purchased product
  const insertQuery =
    "INSERT INTO sql_app.userproducts (user_id, product_id, purchase_date) VALUES (?, ?, CURRENT_TIMESTAMP)";

  //fetch the product details from the onetiemproducts table
  const productQuery =
    "SELECT * FROM sql_app.onetimeproducts WHERE product_id = ?";

  //execute the queries
  db.query(insertQuery, [req.user.id, req.params.product_id], (err, res) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({
          error: "An error occurred while adding the product to the user.",
        });
    } else {
      // Retrieve the purchased product details
      db.query(productQuery, [req.params.product_id], (err, product) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json({
              error: "An error occurred while fetching the product details.",
            });
        } else { 
          res
            .status(200)
            .json({ message: "Payment successful", product: product[0] });
        }
      });
    }
  });
};
 */

const addProductToUser = async (req, res) => {
  const insertQuery =
    "INSERT INTO sql_app.userproducts (user_id, product_id, purchase_date) VALUES (?, ?, CURRENT_TIMESTAMP)";

  const productQuery =
    "SELECT * FROM sql_app.onetimeproducts WHERE product_id = ?";

  // Start a transaction
  db.beginTransaction((err) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "An error occurred while starting the transaction." });
    }

    // Insert the product into the userproducts table
    db.query(
      insertQuery,
      [req.user.id, req.params.product_id],
      (err, result) => {
        if (err) {
          console.error(err);
          db.rollback(() => {
            return res.status(500).json({
              error: "An error occurred while adding the product to the user.",
            });
          });
        }

        if (result.affectedRows === 0) {
          db.rollback(() => {
            return res.status(404).json({ error: "Product not found." });
          });
        }

        // Retrieve the purchased product details
        db.query(productQuery, [req.params.product_id], (err, product) => {
          if (err) {
            console.error(err);
            db.rollback(() => {
              return res.status(500).json({
                error: "An error occurred while fetching the product details.",
              });
            });
          }

          if (product.length === 0) {
            db.rollback(() => {
              return res.status(404).json({ error: "Product not found." });
            });
          }

          // Commit the transaction
          db.commit((err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({
                error: "An error occurred while committing the transaction.",
              });
            }

            return res
              .status(200)
              .json({ message: "Payment successful", product: product[0] });
          });
        });
      }
    );
  });
};

const getProductsOfUser = async (req, res) => {
  const userId = req.user.id;

  const query = `
  SELECT p.product_id, p.name, p.description
  FROM sql_app.onetimeproducts AS p
  INNER JOIN sql_app.userproducts AS up ON p.product_id = up.product_id
  WHERE up.user_id = ?
`;

  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({
          error: "An error occurred while fetching the user's products.",
        });
    }
    const products = result.map((row) => ({
      product_id: row.product_id,
      name: row.name,
      description: row.description,
    }));

    return res.status(200).json(products);
  });
};

module.exports = { addProductToUser, getProductsOfUser };
