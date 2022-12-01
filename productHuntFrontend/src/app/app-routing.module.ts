import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './pages/admin/add-brand/add-brand.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateBrandComponent } from './pages/admin/update-brand/update-brand.component';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';
import { ViewBrandsComponent } from './pages/admin/view-brands/view-brands.component';
import { ViewProductsComponent } from './pages/admin/view-products/view-products.component';
import { ViewReviewsComponent } from './pages/admin/view-reviews/view-reviews.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddReviewComponent } from './pages/user/add-review/add-review.component';
import { LoadProductComponent } from './pages/user/load-product/load-product.component';
import { LoadReviewComponent } from './pages/user/load-review/load-review.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'brands',
        component: ViewBrandsComponent,
      },
      {
        path: 'add-brand',
        component: AddBrandComponent,
      },
      {
        path: 'brand/:bid',
        component: UpdateBrandComponent,
      },
      {
        path: 'products',
        component: ViewProductsComponent,
      },
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'product/:pid',
        component: UpdateProductComponent,
      },
      {
        path: 'reviews',
        component: ViewReviewsComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: ':bId',
        component: LoadProductComponent,
      },
      {
        path: 'add-review/:pid',
        component: AddReviewComponent,
      },
      {
        path: 'show-review/:pid',
        component: LoadReviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
