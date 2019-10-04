module.exports = function(err, req, res, next) {
    console.log(err.message)
    if(err.message === 'Wrong recipient, payload audience != requiredAudience'){
        err.message = "Server error"
    }
    res.status(err.status || 500).json({message: err.message || 'Internal Server Error'})
}