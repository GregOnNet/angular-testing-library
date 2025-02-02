import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { SingleComponent } from './examples/00-single-component';
import { NestedButtonComponent, NestedValueComponent, NestedContainerComponent } from './examples/01-nested-component';
import { InputOutputComponent } from './examples/02-input-output';
import { FormsComponent } from './examples/03-forms';
import { MaterialFormsComponent } from './examples/04-forms-with-material';
import { ComponentWithProviderComponent } from './examples/05-component-provider';
import { WithNgRxStoreComponent, reducer } from './examples/06-with-ngrx-store';
import { WithNgRxMockStoreComponent } from './examples/07-with-ngrx-mock-store';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    NestedButtonComponent,
    NestedValueComponent,
    NestedContainerComponent,
    InputOutputComponent,
    FormsComponent,
    MaterialFormsComponent,
    ComponentWithProviderComponent,
    WithNgRxStoreComponent,
    WithNgRxMockStoreComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule,
    StoreModule.forRoot({
      value: reducer,
      items: function() {
        return ['One', 'Two', 'Three'];
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
