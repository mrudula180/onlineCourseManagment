import { Component, input } from '@angular/core';
import { RoutingLinks } from '../../app.types';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  routingLinks = input.required<RoutingLinks[]>();

}
