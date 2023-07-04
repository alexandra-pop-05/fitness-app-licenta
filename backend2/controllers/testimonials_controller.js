const db = require("../db"); // Import your database connection

// POST /testimonials
const addTestimonial = (req, res) => {
  const { text, image, name } = req.body;
  const user_id = req.user.user_id;

  // Perform validation on the input fields if needed

  // Create the testimonial in the database
  const query =
    "INSERT INTO sql_app.testimonials (user_id, text, image, name) VALUES (?, ?, ?, ?)";
  db.query(query, [user_id, text, image, name], (error, results) => {
    if (error) {
      console.error("Error inserting testimonial:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while inserting the testimonial." });
    }

    // Testimonial successfully inserted
    return res.status(201).json({ success: true });
  });
};

//GET testimonials
const getTestimonials = (req, res) => {
  const q = "SELECT * FROM sql_app.testimonials";
  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching the testimonials." });
    } else if (data.length === 0) {
      return res.status(404).json({ err: "Testimonial not found." });
    } else return res.status(200).json(data);
  });
};

module.exports = { addTestimonial, getTestimonials };
