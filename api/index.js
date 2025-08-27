const express = require("express");
const path = require("path");

const app = express();

// Fixed: Set views directory from /api to project root
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

// Fixed: Serve static files from project root
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Narkis Nails - סטודיו ללק ג׳ל וטיפוח הציפורניים",
    services: [
      { name: "לק ג׳ל – ידיים", price: "120 ₪" },
      { name: "לק ג׳ל – רגליים", price: "120 ₪" },
      { name: "לק ג׳ל + מבנה אנטומי (ידיים)", price: "140 ₪" },
      { name: "השלמת ציפורן שבורה", price: "10 ₪" },
    ],
    workingHours: "א'–ה' | 08:30 – 15:00",
    phone: "054-2458220",
    instagram: "@nails_narkis",
    whatsappLink: "https://calmark.io/p/cv4jI",
  });
});

module.exports = app;
