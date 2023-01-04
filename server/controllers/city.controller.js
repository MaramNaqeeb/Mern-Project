// const {City } = require('../models/city.model');

// module.exports.createCity = (request, response) => {
//     const {name } = request.body;
//     City.create({
//        name
//     })
//         .then(city => response.json(city))
//         .catch(err => response.status(400).json(err));
// }

// module.exports.getAllCity = (request, response) => {
//     City.find({})

//         .then(cities => response.json(cities))
//         .catch(err => response.json(err))
// }

// module.exports.getCity = (request, response) => {
//     City.findOne({_id:request.params.id})
//         .then(cities => response.json(cities))
//         .catch(err => response.json(err))
// }
// module.exports.updateCity = (request, response) => {
//     City.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
//         .then(updateCity => response.json(updateCity))
//         .catch(err => response.status(400).json(err))
// }


// module.exports.deleteCity = (request, response) => {
//     City.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }











