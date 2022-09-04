import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatNativeDateModule } from '@angular/material/core';
import { FooterComponent } from './shared-components/footer/footer.component';
import { SafePipe } from '../../services/pipes/safe.pipe';

@NgModule({
  declarations: [FooterComponent, SafePipe],
  imports: [
    CommonModule,
    CommonModule, FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatDatepickerModule, MatCheckboxModule,
    MatIconModule, MatInputModule, MatTooltipModule, MatStepperModule,
    MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule,
    MatFormFieldModule,
    MatTableModule, MatDialogModule, MatTabsModule, MatExpansionModule, MatBadgeModule,
    MatMenuModule, MatRadioModule,
    HttpClientModule, MatSnackBarModule, MatDividerModule,
    NgxPaginationModule, MatNativeDateModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatDatepickerModule, MatCheckboxModule,
    MatIconModule, MatInputModule, MatTooltipModule, MatStepperModule,
    MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule,
    MatFormFieldModule, MatBadgeModule,
    MatExpansionModule,
    MatTableModule, MatDialogModule, MatTabsModule,
    MatMenuModule, MatRadioModule, MatSnackBarModule, MatDividerModule,
    NgxPaginationModule, MatNativeDateModule, FooterComponent, SafePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
