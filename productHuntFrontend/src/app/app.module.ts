import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewBrandsComponent } from './pages/admin/view-brands/view-brands.component';
import { AddBrandComponent } from './pages/admin/add-brand/add-brand.component';
import { ViewProductsComponent } from './pages/admin/view-products/view-products.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';
import { UpdateBrandComponent } from './pages/admin/update-brand/update-brand.component';

import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { LoadProductComponent } from './pages/user/load-product/load-product.component';
import { AddReviewComponent } from './pages/user/add-review/add-review.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ViewReviewsComponent } from './pages/admin/view-reviews/view-reviews.component';
import { LoadReviewComponent } from './pages/user/load-review/load-review.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewBrandsComponent,
    AddBrandComponent,
    ViewProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    UpdateBrandComponent,
    UserSidebar,
    LoadProductComponent,
    AddReviewComponent,
    ViewReviewsComponent,
    LoadReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
