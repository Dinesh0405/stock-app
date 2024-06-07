import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { WatchListComponent } from './dashboard/watch-list/watch-list.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { PositionComponent } from './dashboard/position/position.component';
import { HoldingComponent } from './dashboard/holding/holding.component';
import { TradingBalanceComponent } from './dashboard/trading-balance/trading-balance.component';
import { EdisComponent } from './dashboard/edis/edis.component';
import { PledgeRequestComponent } from './dashboard/pledge-request/pledge-request.component';
import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    WatchListComponent,
    OrdersComponent,
    PositionComponent,
    HoldingComponent,
    TradingBalanceComponent,
    EdisComponent,
    PledgeRequestComponent,
    NavBarComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
