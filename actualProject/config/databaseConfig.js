
// Unblock this for your production!
// if (process.env.NODE_ENV === 'production') {

connect = false

if (connect) {
    module.exports = {
        mongoURI:
            'Syed'
    }
    } else {
    module.exports = {
        mongoURI: 'mongodb://localhost/work-out'
    }
}