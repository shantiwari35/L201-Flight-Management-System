import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from "./ui/footer/footer.component";
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { ContentViewComponent } from './ui/content-view/content-view.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavbarComponent,ContentViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flight-management';
}
