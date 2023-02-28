module.exports = async (req, res) => {

    // Access to the request body (only possible with the POST, PUT and PATCH methods)
    // let body = req.json();
    // if (!body || !body.name) {
    //     res.status(400).set("Content-Type", "text/plain").send("Bad request");
    //     return;
    // }

    res.status(200).set("Content-Type", "text/plain").send(`Hello Linus`);
}
