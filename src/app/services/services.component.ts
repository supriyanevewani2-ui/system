import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [NgForOf,CommonModule,RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    { title: 'Web Development', description: 'Build responsive websites.', bgColor: 'bg-primary' },
    { title: 'App Development', description: 'Create modern apps.', bgColor: 'bg-success' },
    { title: 'UI/UX Design', description: 'Design engaging interfaces.', bgColor: 'bg-info' },
    { title: 'SEO Optimization', description: 'Improve search rankings.', bgColor: 'bg-warning' },
    { title: 'Cloud Services', description: 'Deploy scalable systems.', bgColor: 'bg-danger' }
  ];
  seeMore(service: any) {
    alert(`More details for ${service.title}`);
  }
}