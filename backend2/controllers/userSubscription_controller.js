const db = require("../db");

//ADD SUBSCRIPTION TO USER
const addSubscriptionBought = (req, res) => {
  const { user_id, subscription_id } = req.body;
  console.log(user_id, subscription_id);

  // Get the current date for start_date
  const start_date = new Date().toISOString().split("T")[0];

  // Calculate the end_date by adding 30 days to start_date
  const end_date = new Date();
  end_date.setDate(end_date.getDate() + 30);
  const end_date_string = end_date.toISOString().split("T")[0];

  const query =
    "INSERT INTO sql_app.usersubscription (user_id, subscription_id, start_date, end_date_string) VALUES (?, ?, ?, ?)";
  db.query(
    query,
    [user_id, subscription_id, start_date, end_date],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          error: "An error occurred while adding the subscription to the user.",
        });
      }
    }
  );
  return res.status(200).json({
    message: "Subscription added successfully.",
  });
};

//GET SUBSCRIPTION OF USER

const getSubscriptionOfUser = (req, res) => {
  console.log(req.user);
  const user_id = req.user.user_id;

  const query = `
    SELECT p.name, p.description
    FROM sql_app.subscriptions AS p
    INNER JOIN sql_app.usersubscription AS up ON p.subscription_id = up.subscription_id
    WHERE up.user_id = ?
  `;

  db.query(query, [user_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while fetching the user's subscription.",
      });
    }
    const subscriptions = result.map((row) => ({
      name: row.name,
      description: row.description,
    }));

    return res.status(200).json(subscriptions);
  });
};

module.exports = { addSubscriptionBought, getSubscriptionOfUser };
