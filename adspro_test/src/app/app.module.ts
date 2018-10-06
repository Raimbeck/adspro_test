import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminCustomerComponent } from './components/admin-customer/admin-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AdminAuthService } from './services/admin-auth.service';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HistoryComponent } from './components/history/history.component';
import { StatisticComponent } from './components/statistic/statistic.component';

@NgModule({
  declarations: [
      AppComponent,
      CustomerComponent,
      HomeComponent,
      AdminCustomerComponent,
      ModalComponent,
      HistoryComponent,
      StatisticComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      MatDialogModule,
      FormsModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatButtonModule,
      RouterModule.forRoot([
          { path: '', component: HomeComponent },
          { path: 'customers/edit/:id', component: CustomerComponent },
          { path: 'customers/new', component: CustomerComponent },
          { path: 'admin/customers', component: AdminCustomerComponent, canActivate: [AdminAuthService] }
      ], {
              useHash: true
          })
    ],
    entryComponents: [
        ModalComponent,
        HistoryComponent,
        StatisticComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
