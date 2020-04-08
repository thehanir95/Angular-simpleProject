import { Component, OnInit } from '@angular/core';

export interface Employee{
  id : string;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  employees : Employee[] = [
    {id: '1', name: 'thehani', email: 'thehani@gmail.com', password: 'test'},
    {id: '2', name: 'sameera', email: 'sameera@gmail.com', password: 'test'},
    {id: '3', name: 'kamal', email: 'kamal@gmail.com', password: 'test'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
