import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, SimpleChanges, OnDestroy } from '@angular/core';
import { throwIfEmpty, Subscription } from 'rxjs';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, OnDestroy{

  parametro!: string;
  nombreCrypto: any= {};
  subscription!: Subscription;

  constructor(private paramsUrl: ActivatedRoute, private http: HttpClient) { 
    this.paramsUrl.params.subscribe((data) => console.log("Parametro Actual: "+ data['id']));
  }  
  
  ngOnInit() {
    this.paramsUrl.params.subscribe((data) => {
      this.parametro = JSON.stringify(data['id']);
    });
    this.subscription = this.http.get('https://nova.bitcambio.com.br/api/v3/public/getassets')
    .subscribe(response => {
      console.log("SE SUSCRIBIO");
      this.nombreCrypto = response;
      this.nombreCrypto = this.nombreCrypto['result'];
    });
  }
  
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
      console.log("SE DESUSCRIBIO");
    }


    
    
  }
}

