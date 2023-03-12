module.exports = (req, res, next) => {
    res.header('Access-Control-Expose-Headers', 'Content-Range')
    res.header('Content-Range', 'jobs 0-20/20')
    next()

}

    // "server": "json-server --watch --port 5000 db.json --middlewares ./range.js",
