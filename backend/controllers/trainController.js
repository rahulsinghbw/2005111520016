const client = require('../util/client');

exports.getTrains = async (req, res) => {
    let response;
    try {
        response = await client.get("/trains", {
            headers: {
                authorization: "Bearer " + process.env.ACCESS_TOKEN
            }
        });

    } catch(error) {
        return res.json({error: error});
    }

    res.json({response: response.data});
};  

exports.getTrain = async (req, res) => {
    let response;
    let trainId = req.params.id;
    
    try {
        response = await client.get(`/trains/${trainId}`, {
            headers: {
                authorization: "Bearer " + process.env.ACCESS_TOKEN
            }
        });

    } catch(error) {
        return res.json({error: error});
    }

    res.json({response: response.data});
};