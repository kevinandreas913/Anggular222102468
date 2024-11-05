import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent ,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
