const DentistController = require('../controllers/dentist.controller');
module.exports = function(app){
    app.post('/api/dentists', DentistController.createDentist);

app.get('/api/dentists', DentistController.getAllDentist);





app.get('/api/dentists/:id', DentistController.getDentist);
app.put('/api/dentists/:id', DentistController.updateDentist);
app.delete('/api/dentists/:id', DentistController.deleteDentist);

//  app.get('/api/dentists/city/:cityId', DentistController.getAllDentistBelongToCity);






}
