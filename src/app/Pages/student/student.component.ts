import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-student',
  imports: [HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  routes = [
    {
      lable: 'Dashboard',
      route: 'mycourse'
    },
    {
      lable: 'Explore Courses',
      route: 'explore'
    },
  ]

}
