module.exports = app => {
    app.listen(app.get("PORT"), () => {
        console.log(`NTask API - port ${app.get("PORT")}`);
    });
}