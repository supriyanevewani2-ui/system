import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

import AOS from 'aos';

@Component({
  selector: 'app-contactus',
  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent implements AfterViewInit {

  isSubmitting = false;

  successMessage = '';

  errorMessage = '';


  constructor(
    @Inject(PLATFORM_ID)
    private platformId: object
  ) {}


  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      AOS.init({
        duration: 1000,
        once: true
      });

    }

  }


  async submitForm(event: Event): Promise<void> {

    event.preventDefault();

    this.successMessage = '';

    this.errorMessage = '';


    const form =
      event.target as HTMLFormElement;


    // Browser validation

    if (!form.checkValidity()) {

      form.reportValidity();

      return;

    }


    this.isSubmitting = true;


    const formData =
      new FormData(form);


    try {

      const response =
        await fetch(
          'https://formspree.io/f/xrpgeqlg',
          {
            method: 'POST',

            body: formData,

            headers: {
              Accept: 'application/json'
            }
          }
        );


      if (response.ok) {

        this.successMessage =
          'Thank you! Your message has been sent successfully.';

        this.errorMessage = '';

        form.reset();

      }

      else {

        this.successMessage = '';

        this.errorMessage =
          'Sorry, your message could not be sent. Please try again.';

      }

    }

    catch (error) {

      console.error(
        'Form submission error:',
        error
      );

      this.successMessage = '';

      this.errorMessage =
        'Unable to send your message. Please try again later.';

    }

    finally {

      this.isSubmitting = false;

    }

  }

}

