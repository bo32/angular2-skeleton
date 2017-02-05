import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';

const MY_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'countries', component: CountriesComponent }
];
export const routing = RouterModule.forRoot(MY_ROUTES);