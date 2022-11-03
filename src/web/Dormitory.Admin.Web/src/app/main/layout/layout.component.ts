import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  userName : string = "";
  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("user") ?? "";
  }

  logOut()
  {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
