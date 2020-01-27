import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  constructor(private carService: CarService) { this.getCarDetails(); }
  carDetails: any = [];
 
  cars = {
    _id: '',
    name: '',
    company: '',
    fuelType: '',
    powerSteer: '',
    breakSystem: '',
    showroomPrice: '',
    onroadPrice: '',
    imgurl: '',
    mileage: '',
    seatingCapacity: '',
    engineCapacity: '',
    gearType: ''
  }
  getCarDetails() {
    this.carService.getCarDetails().subscribe(cars => {
      this.carDetails = cars;
      console.log(this.carDetails);
    }, err => {
      console.log(err);
    }, () => {
      console.log("Car details got successfully");
    })
  }

  sendCarDetails(carsDetails) {
   this.cars=carsDetails;
   console.log(this.cars);
  }

  updateCarDetails(details){
    this.carService.updateCarDetails(details).subscribe(carDetails=>{
      console.log(carDetails);
      this.getCarDetails();
    },err=>{
      console.log(err);
    },()=>{
      console.log("Updated car details successfully");
    })
  }

  deleteCarDetails(id){
    this.carService.deleteCarDetails(id).subscribe(carDetails=>{
    console.log(carDetails);
    this.getCarDetails();
    },err=>{
      console.log(err);
    },()=>{
      console.log("Deleted car details successfully");
    })
  }

 
  ngOnInit() {
  }

}
