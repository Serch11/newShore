import { Component, OnInit } from '@angular/core';
import { HouseService } from './house.service'
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  constructor(
    private houseService: HouseService
  ) { }

  ngOnInit(): void {


  }

}
