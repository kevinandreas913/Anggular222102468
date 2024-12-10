import { Component, Renderer2 } from '@angular/core';
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
   constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Menambahkan atau menghapus kelas pada <body> saat komponen dashboard diinisialisasi
    if (document && document.body) {
      this.renderer.removeClass(document.body, "sidebar-open");
      this.renderer.addClass(document.body, "sidebar-closed");
      this.renderer.addClass(document.body, "sidebar-collapse");
      this.renderer.addClass(document.body, "sidebar-mini");
    }
  }
    
}
