import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MainNavComponent } from "./layout/main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
// import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, MainNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    // MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatTreeModule,
    // MatInputModule,
    // MatSelectModule,
    // MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
