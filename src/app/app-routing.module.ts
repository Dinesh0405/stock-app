import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { WatchListComponent } from './dashboard/watch-list/watch-list.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { HoldingComponent } from './dashboard/holding/holding.component';
import { PositionComponent } from './dashboard/position/position.component';
import { TradingBalanceComponent } from './dashboard/trading-balance/trading-balance.component';
import { EdisComponent } from './dashboard/edis/edis.component';
import { PledgeRequestComponent } from './dashboard/pledge-request/pledge-request.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'watchlist', component: WatchListComponent },
  {path: 'orders', component: OrdersComponent },
  {path: 'holding', component: HoldingComponent },
  {path: 'position', component: PositionComponent },
  {path: 'trading-balance', component: TradingBalanceComponent },
  {path: 'edis', component: EdisComponent },
  {path: 'pledge', component: PledgeRequestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
