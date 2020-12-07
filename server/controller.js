module.exports = {
    getLatest: async (req, res) => {
        const db = req.app.get('db');
    const latestProducts = await db.getPopular();
    res.status(200).send(latestProducts)
    },
}