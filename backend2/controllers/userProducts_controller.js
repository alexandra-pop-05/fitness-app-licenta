const db = require("../db");

const addProductBought = (req, res) => {
  const { user_id, product_id } = req.body;

  // Check if the user has already bought the product
  const selectQuery =
    "SELECT * FROM sql_app.userproducts WHERE user_id = ? AND product_id = ?";
  db.query(selectQuery, [user_id, product_id], (selectErr, selectResult) => {
    if (selectErr) {
      console.error(selectErr);
      return res.status(500).json({
        error:
          "An error occurred while checking if the product has already been bought.",
      });
    }

    if (selectResult.length > 0) {
      // The user has already bought the product, so don't add it again
      return res.status(400).json({
        error: "The product has already been bought by the user.",
      });
    }

    // The product has not been bought by the user, so insert it into the table
    const insertQuery =
      "INSERT INTO sql_app.userproducts (user_id, product_id) VALUES (?, ?)";
    db.query(insertQuery, [user_id, product_id], (insertErr, insertResult) => {
      if (insertErr) {
        console.error(insertErr);
        return res.status(500).json({
          error: "An error occurred while adding the product to the user.",
        });
      }

      return res.status(200).json({
        message: "Product added to user's products successfully.",
      });
    });
  });
};

const getProductsOfUser = (req, res) => {
  console.log(req.user);
  const user_id = req.user.user_id;

  const query = `
  SELECT p.name, p.description
  FROM sql_app.onetimeproducts AS p
  INNER JOIN sql_app.userproducts AS up ON p.product_id = up.product_id
  WHERE up.user_id = ?
`;

  const q2 = `
SELECT s.name, s.description
FROM sql_app.subscriptions AS s
INNER JOIN sql_app.userproducts AS up ON s.product_id = up.product_id
WHERE up.user_id = ?
`;
  const combinedQuery = `(${query}) UNION (${q2})`;

  db.query(combinedQuery, [user_id, user_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while fetching the user's products.",
      });
    }
    const products = result.map((row) => ({
      name: row.name,
      description: row.description,
    }));

    return res.status(200).json(products);
  });
};

module.exports = { getProductsOfUser, addProductBought };
