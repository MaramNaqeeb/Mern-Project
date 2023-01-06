const {Dentist } = require('../models/dentist.model');

module.exports.createDentist = (request, response) => {
    const {fname,lname,location,from,to,phoneNumber,services,yearsOfExperience,recommened,doNotRecommened,rate,city} = request.body;
    Dentist.create({
        fname,
        lname,
        location,
        from,
        to,
        phoneNumber,
        services,
        yearsOfExperience,
        recommened,
        doNotRecommened,
        rate,
        
        city,
        // city_id,

    })
        .then(dentist => response.json(dentist))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllDentist = (request, response) => {
    Dentist.find({}).sort( {city: 1})
    
        // .populate("city_id")

        .then(dentists => response.json(dentists))
        .catch(err => response.json(err))
}

// module.exports.getAllDentistInNablus = (request, response) => {
//     Dentist.find({city:'Nablus'})
//         // .populate("city_id")

//         .then(dentists => response.json(dentists))
//         .catch(err => response.json(err))
// }


// module.exports.getAllDentistInJenin = (request, response) => {
//     Dentist.find({city:'Jenin'})
//         // .populate("city_id")

//         .then(dentists => response.json(dentists))
//         .catch(err => response.json(err))
// }
module.exports.getDentist = (request, response) => {
    Dentist.findOne({_id:request.params.id})
        .then(dentists => response.json(dentists))
        .catch(err => response.json(err))
}
module.exports.updateDentist = (request, response) => {
    Dentist.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
        .then(updateDentist => response.json(updateDentist))
        .catch(err => response.status(400).json(err))
}


module.exports.deleteDentist = (request, response) => {
    Dentist.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

// module.exports.getAllDentistBelongToCity = (request, response) => {
//     Dentist.find({city_id: request.params.cityId})
//         .populate("city_id")
//         .then(dentists => response.json(dentists))
//         .catch(err => response.json(err))
// }














