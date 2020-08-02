import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  public adminLogged;
  public adminMail;
  constructor(private router : Router) {
    this.adminLogged = localStorage.getItem("adminLogged");
    this.adminMail =  localStorage.getItem("adminMail");
   }

  ngOnInit(): void {
    console.log("adminlogged",this.adminLogged);
  }
  
}
