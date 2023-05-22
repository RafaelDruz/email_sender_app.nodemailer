
const express = require("express");
const router = express.Router();
const { Transport, Message } = require('./configMailer.js');

const transport = Transport();


router.get("/sendmsg", (req, res) => {
    const success = req.query.success === 'true';
    const failure = req.query.failure === 'true';
    res.render("users/sendmsg", { success, failure });
});

router.post("/sendmsg", async (req, res) => {
    const { content } = req.body;
    try {
        const confirmLink = `${content}`;
        transport.sendMail(Message(confirmLink), (err) => {
            if (err) {
              console.error(err);
              return res.redirect("/sendmsg?failure=true");
            }
          });
        return res.redirect("/sendmsg?success=true");
    } catch (err) {
        console.error(err);
        return res.redirect("/sendmsg?failure=true");
    }
});

module.exports = router;


