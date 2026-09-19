import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  constructor(private router: Router) {}

  ngOnInit(): void {

    /* =========================================
       AOS
    ========================================= */

    AOS.init({
      duration: 1000,
      once: true
    });


    /* =========================================
       SCROLL TO TOP ON EVERY ROUTE CHANGE
    ========================================= */

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe(() => {

        // Wait until Angular finishes rendering the new page
        setTimeout(() => {

          window.scrollTo(0, 0);

          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;

        }, 100);

      });

  }
 scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
}