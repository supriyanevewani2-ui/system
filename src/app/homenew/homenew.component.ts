import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homenew',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './homenew.component.html',
  styleUrl: './homenew.component.css'
})
export class HomenewComponent {
 lineOne = "We don't just build software...";
  lineTwo = "We build the people who build it!";

  lineOneWords = this.lineOne.split(' ');
  lineTwoWords = this.lineTwo.split(' ');
}
