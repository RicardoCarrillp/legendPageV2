import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgxMarqueeModule } from 'ngx-marquee';
import { SquaresModule } from 'src/app/shared/squares/squares.module';
import { LogoBlackModule } from 'src/app/shared/logoBlack/logoBlack.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxMarqueeModule,
    SquaresModule,
    LogoBlackModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
