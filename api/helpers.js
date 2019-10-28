module.exports = { 
    prepare: (object) => {
        object._id = object._id.toString()
        return object
    }
}