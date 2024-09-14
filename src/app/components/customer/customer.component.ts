import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: any = {};  // Inicializa el objeto vacío

  constructor(private customerService: CustomerService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(
      (data) => {
        console.log(data); // Revisa aquí los datos en la consola
        this.customer = data;  // Asigna los datos recibidos a la variable customer
        this.cd.detectChanges();
        console.log('Datos recibidos:', data);
      },
      (error) => {
        console.error('Error al obtener los datos del cliente', error);
      }
    );
  }
}



