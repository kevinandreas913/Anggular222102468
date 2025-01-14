import { AfterViewInit, Component, Renderer2, RendererType2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';

declare const $: any;

@Component({
  selector: 'app-forex',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css'
})
export class ForexComponent implements AfterViewInit{
  table1: any;
	data: any;

  constructor(private http: HttpClient,private renderer: Renderer2,) {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");
    this.renderer.addClass(document.body, "sidebar-collapse");
    this.renderer.addClass(document.body, "sidebar-mini");
  }

  ngAfterViewInit(): void {
		this.table1 = $("#table1").DataTable();
		this.forex();
	}


  // forex(): void {
  //   this.http.get('https://openexchangerates.org/api/latest.json?app_id=e4b1eb257da840c29507248a5716a38e')
  //    .subscribe((data: any) => {
  //       console.log(data);
	// 		  this.table1.clear();

  //       var rates = data.rates;
  //       console.log(rates);

  //       var idr = rates.IDR;
  //       var idr2 = formatCurrency(idr, "en-US", "", "USD");
  //       console.log("USD : " + idr2);
  //       var row = [1, "USD", idr2];
  //       this.table1.row.add(row);

  //       var sgd = rates.IDR /rates.SGD;
  //       var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
  //       console.log("SGD : " + sgd2);
  //       row = [2, "SGD", sgd2];
  //       this.table1.row.add(row);

  //       var bnd = rates.IDR /rates.BND;
  //       var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
  //       console.log("BND : " + bnd2);
  //       row = [3, "BND", bnd2];
  //       this.table1.row.add(row);

  //       var hkd = rates.IDR /rates.HKD;
  //       var hkd2 = formatCurrency(hkd, "en-US", "", "HKD");
  //       console.log("HKD : " + hkd2);
  //       row = [4, "HKD", hkd2];
  //       this.table1.row.add(row);

  //       var btc = rates.IDR /rates.BTC;
  //       var btc2 = formatCurrency(btc, "en-US", "", "BTC");
  //       console.log("BTC : " + btc2);
  //       row = [5, "BTC", btc2];
  //       this.table1.row.add(row);

  //       var bob = rates.IDR /rates.BOB;
  //       var bob2 = formatCurrency(bob, "en-US", "", "BOB");
  //       console.log("BOB : " + bob2);
  //       row = [6, "BOB", bob2];
  //       this.table1.row.add(row);

  //       var eur = rates.IDR / rates.EUR;
  //       var eur2 = formatCurrency(eur, "en-US", "", "EUR");
  //       console.log("EUR : " + eur2);
  //       row = [7, "EUR", eur2];
  //       this.table1.row.add(row);

  //       var cup = rates.IDR / rates.CUP;
  //       var cup2 = formatCurrency(cup, "en-US", "", "CUP");
  //       console.log("CUP : " + cup2);
  //       row = [8, "CUP", cup2];
  //       this.table1.row.add(row);

  //       var dop = rates.IDR / rates.DOP;
  //       var dop2 = formatCurrency(dop, "en-US", "", "DOP");
  //       console.log("DOP : " + dop2);
  //       row = [9, "DOP", dop2];
  //       this.table1.row.add(row);

  //       var ils = rates.IDK / rates.ILS;
  //       var ils2 = formatCurrency(ils, "en-US", "", "ILS");
  //       console.log("ILS : " + ils2);
  //       row = [10, "ILS", ils2];
  //       this.table1.row.add(row);

  //       this.table1.draw();
  //     });
  // }
  forex(): void {
  this.http.get('https://openexchangerates.org/api/latest.json?app_id=e4b1eb257da840c29507248a5716a38e')
    .subscribe((data: any) => {
      this.table1.clear(); 
      const rates = data.rates;
      console.log(rates);

      let index = 1; 
      for (const currency in rates){
        const rate = rates.IDR / rates[currency]; 
        const formattedRate = formatCurrency(rate, "en-US", "", currency);
        console.log(`${currency} : ${formattedRate}`);

        const row = [index++, currency, formattedRate]; 
        this.table1.row.add(row); 
      }
      this.table1.draw(); 
    });
  }
}
