const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.json("Welcome Prathna");

});

router.post("/", (req, res) => {
    res.json({ message: req.body.message });
    console.info(req.body);
});

router.put("/:id", (req, res) => {
    res.json({ messageId: req.params.id });
    console.info(req.params);
});

router.delete("/:id", (req, res) => {
    res.json(`Post id delete : ${req.params.id}`);
});

router.patch("/like-post/:id", (req, res) => {
    res.json(`Post liked : id :${req.params.id}`);
});

router.patch("/dislike-post/:id", (req, res) => {
    res.json(`Post disliked : id :${req.params.id}`)
})

const welcomeName = (req, res) => {
    res.send(`Welcome ${req.params.name}`);
};

router.get("/users/:name", welcomeName);

// Test api //
const character = [
    {
        id: 1,
        name: "Naruto",
        type: "Ninja"
    },
    {
        id: 2,
        name: "Katsuki",
        type: "Ninja"
    },
    {
        id: 3,
        name: "Yusuke",
        type: "Ninja"
    }
];

const getCharacter = (req, res) => {
    res.status(200).json(character);
};

router.get("/character", getCharacter);

module.exports = router;

