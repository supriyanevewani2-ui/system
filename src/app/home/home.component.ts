
import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({

  selector: 'app-home',

  standalone: true,

  imports: [RouterLink],

  templateUrl: './home.component.html',

  styleUrl: './home.component.css'

})

export class HomeComponent {

  lineOne = "We don't just build software...";

  lineTwo = "We build the people who build it!";

  lineOneWords = this.lineOne.split(' ');

  lineTwoWords = this.lineTwo.split(' ');

}
