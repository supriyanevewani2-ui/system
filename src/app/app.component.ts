
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ContactComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'skylon-sys';

  ngOnInit(): void {

    /*
     * Initialize AOS animations.
     * This does not affect routing,
     * navbar, footer or other components.
     */

    AOS.init({
      duration: 1000,
      once: true
    });

  }

}

