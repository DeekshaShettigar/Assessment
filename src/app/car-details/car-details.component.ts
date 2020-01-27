import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor(private carService:CarService,private router:Router) { }

  postCarDetails(details){
   this.carService.postCarDetails(details).subscribe(carDetails=>{
     console.log(carDetails);
     this.carService.getCarDetails();
     this.router.navigateByUrl('/car-info');
   },err=>{
     console.log(err);
   },()=>{
     console.log("Car details sent successfully")
   })
  }
  ngOnInit() {
  }

}
