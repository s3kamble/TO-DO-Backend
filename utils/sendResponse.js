const sendResponse = ({res,statusCode, message, data,error}) => {
    res.status(statusCode);
    if(error) {
        console.log(error);
        return res.json({
            message,
            error,
        });
    }
    return res.json({
        message,
        data,
    });
}

module.exports = sendResponse;