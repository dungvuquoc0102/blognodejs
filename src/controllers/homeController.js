function getHomepage(req, res) {
    res.render("index.ejs");
}

function getPosts(req, res) {
    res.status(200).json([
        {
            title: "json-server",
            author: "typicode"
        },
        {
            title: "mysql2",
            author: "npm"
        },
        {
            title: "helloworld",
            author: "goodboy"
        }
    ]);
}

module.exports = {
    getHomepage,
    getPosts
};
