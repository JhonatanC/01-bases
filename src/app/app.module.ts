import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { CounterComponent } from './components/counter/counter.component';
// import { HeroComponent } from './components/heroes/hero/hero.component';
// import { ListComponent } from './components/heroes/list/list.component';
import { CounterModule } from './components/counter/counter.module';
import { HeroModule } from './components/heroes/hero.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // HeroComponent,
    // ListComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
