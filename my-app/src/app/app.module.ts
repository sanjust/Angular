import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipeComponent } from './pipe/pipe.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StructuralDirectivesComponent,
    PipeComponent,
    DependencyInjectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
