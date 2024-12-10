import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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
