const db = require("../db");

const addProductToUser = (req, res) => {
  const { user_id, product_id } = req.body;
  console.log(user_id, product_id);
  const query =
    "INSERT INTO sql_app.userproducts (user_id, product_id) VALUES (?, ?)";

  db.query(query, [user_id, product_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while adding the product to the user.",
      });
    }

    return res.status(200).json({
      message: "Product added to user's products successfully.",
    });
  });
};

const getProductsOfUser = (req, res) => {
  console.log(req.user);
  const userId = req.user.user_id;

  const query = `
  SELECT p.name, p.description
  FROM sql_app.onetimeproducts AS p
  INNER JOIN sql_app.userproducts AS up ON p.product_id = up.product_id
  WHERE up.user_id = ?
`;

  db.query(query, [userId], (err, result) => {
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

module.exports = { addProductToUser, getProductsOfUser };
