import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {
public myArray : string[] = [] ; //javascript
public isActive : boolean = true;
public dob: Date = new Date(1960,12,20);
public tmpVar : string = "petros";
public price :number = 35.14;

  constructor() {
    for (let counter = 0 ; counter < 10 ;++counter)
        this.myArray.push(`Element ${counter.toString()}`);
  }

  ngOnInit(): void {

  }

  onKeyUp(){

        console.log("You pressed enter key");
  }
}
