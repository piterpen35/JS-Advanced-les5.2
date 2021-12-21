const getResult = require('./get-result.js');

const controller = async (req, res) => {
    const uah = req.params.uah;
    const course = await getResult(uah)
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => res.status(500).json({
            message: `Oops, error! ==> ${error}`
        }));

}

module.exports = controller;
