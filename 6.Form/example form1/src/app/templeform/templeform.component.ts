import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templeform',
  templateUrl: './templeform.component.html',
  styleUrls: ['./templeform.component.css']
})
export class TempleformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
onSubmit(value:any){
    console.log(value);
}
}
