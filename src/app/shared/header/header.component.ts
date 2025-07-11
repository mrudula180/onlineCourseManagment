import { Component, inject, input, signal } from '@angular/core';
import { profiles } from '../../app.constants';
import { DataService } from '../../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userName = signal('User');
  profileCover = signal('');
  dataService = inject(DataService);
  date = new Date();

  ngOnInit(){
    this.userName.set(this.dataService.getName()!);
    this.profileCover.set(profiles[Math.floor(Math.random()*(profiles.length))]);
  }
}
