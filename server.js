const express = require("express");
const app = express();

// 1. O'zimiz yaratgan helper modulni ulaymiz
const { checkGuess } = require("./helpers/game");

// 2. Middleware sozlamalari (CSS va Form ma'lumotlarini o'qish uchun)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// 3. EJS shablon dvigatelini sozlash
app.set("views", "views");
app.set("view engine", "ejs");

// O'yin holati o'zgaruvchilari
let attempts = 0;
let message = "O'yinni boshlang!";

// 4. Bosh sahifaga GET so'rovi kelganda EJS sahifani ko'rsatish
app.get("/", (req, res) => {
    res.render("index", { message, attempts });
});

// 5. Tugma bosilganda (POST so'rovi) kiritilgan sonni tekshirish
app.post("/check", (req, res) => {
    const userNumber = Number(req.body.guess);
    attempts++;

    // helpers/game.js ichidagi funksiyani chaqiramiz
    message = checkGuess(userNumber, attempts);

    res.redirect("/");
});

// 6. Serverni 5000-portda ishga tushirish
app.listen(5000, () => {
    console.log("Server running on port 5000 🔥");
});