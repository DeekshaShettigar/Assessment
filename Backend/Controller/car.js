const Car = require('../Model/car');

exports.postCarDetails = (req, res, next) => {
    let car = new Car({
        name: req.body.name,
        company: req.body.company,
        fuelType: req.body.fuelType,
        powerSteer: req.body.powerSteer,
        breakSystem: req.body.breakSystem,
        showroomPrice: req.body.showroomPrice,
        onroadPrice: req.body.onroadPrice,
        imgurl: req.body.imgurl,
        mileage: req.body.mileage,
        seatingCapacity: req.body.seatingCapacity,
        engineCapacity: req.body.engineCapacity,
        gearType: req.body.gearType
    })
    car.save().then(carDetails => {
        console.log(carDetails);
        res.json(carDetails);
    }).catch(err => {
        console.log(err);
    })
}

exports.getCarDetails = (req, res, next) => {
    Car.find().then(carDetails => {
        console.log(carDetails);
        res.json(carDetails);
    }).catch(err => {
        console.log(err);
    })
}

exports.updateCarDetails = (req, res, next) => {
    let id = req.body.id;
    let name = req.body.name;
    let company = req.body.company;
    let fuelType = req.body.fuelType;
    let powerSteer = req.body.powerSteer;
    let breakSystem = req.body.breakSystem;
    let showroomPrice = req.body.showroomPrice;
    let onroadPrice = req.body.onroadPrice;
    let imgurl = req.body.imgurl;
    let mileage = req.body.mileage;
    let seatingCapacity = req.body.seatingCapacity;
    let engineCapacity = req.body.engineCapacity;
    let gearType = req.body.gearType;
    Car.findById(id).then(cars => {
        cars.name = name,
        cars.company = company;
        cars.fuelType = fuelType;
        cars.powerSteer = powerSteer;
        cars.breakSystem = breakSystem;
        cars.showroomPrice = showroomPrice;
        cars.onroadPrice = onroadPrice;
        cars.imgurl = imgurl;
        cars.mileage = mileage;
        cars.seatingCapacity = seatingCapacity;
        cars.engineCapacity = engineCapacity;
        cars.gearType = gearType;
        cars.save();
        res.json(cars);
    }).catch(err => {
        console.log(err);
    })
}

exports.deleteCarDetails = (req, res, next) => {
    let id = req.params.id;
    Car.findByIdAndRemove(id).then(carDetails => {
        console.log(carDetails);
        res.json(carDetails);
    }).catch(err => {
        console.log(err);
    })
}

