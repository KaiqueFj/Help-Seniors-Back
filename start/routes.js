'use strict'
const Route = use('Route')

// Auth
Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
Route.post('/update', 'AuthController.update').middleware(["auth"])
Route.get('/showUser', 'AuthController.show').middleware(["auth"])

//Medicines
Route.post('/status', 'MedicineController.addStatus').middleware(["auth"])
Route.post('/registerMedicine', 'MedicineController.register').middleware(["auth"])
Route.post('/deleteMedicine', 'MedicineController.delete')
Route.get('/showMedicine', 'MedicineController.show').middleware(["auth"])

//Hospítal
Route.post('/createHospital', 'HospitalController.store')
Route.get('/showHospital', 'HospitalController.show')

//AppointmentReminder
Route.post('/newAppointmentReminder', 'AppointmentController.store').middleware(['auth'])
Route.post('/updateAppointmentReminders', 'AppointmentController.update').middleware(['auth'])
Route.post('/deleteAppointmentReminders', 'AppointmentController.delete').middleware(['auth'])
Route.get('/showAppointmentReminders', 'AppointmentController.show').middleware(['auth'])


// FirstAir
Route.post('/storeFirstAid', 'FirstAidController.store')
Route.get('/showFirstAid', 'FirstAidController.show')


// Help
Route.post('/storeHelp', 'HelpController.store')
Route.get('/showHelp', 'HelpController.show')
