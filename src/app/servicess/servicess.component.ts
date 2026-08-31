import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Service { title: string; icon: string; shortDescription: string; description: string; features: string[]; technologies: string[]; }
@Component({
  selector: 'app-servicess',
  standalone: true, imports: [CommonModule],
  templateUrl: './servicess.component.html',
  styleUrl: './servicess.component.css'
})


export class ServicessComponent {

  selectedService: Service | null = null;

  services: Service[] = [

    // =====================================================
    // 1. CUSTOM SOFTWARE DEVELOPMENT
    // =====================================================

    {
      title: 'Custom Software Development',

      icon: 'fas fa-laptop-code',

      shortDescription:
        'End-to-end software solutions designed around your unique business requirements.',

      description:
        'We design and develop customized software solutions that address specific business processes, operational challenges and growth requirements. From requirement analysis and architecture to development, testing and deployment, we build scalable applications tailored to your organization.',

      features: [
        'Requirement Analysis & Solution Design',
        'Custom Business Applications',
        'Enterprise Software Development',
        'REST API Development',
        'Database Design & Integration',
        'Cloud-Ready Application Architecture',
        'Application Testing & Quality Assurance',
        'Maintenance & Technical Support'
      ],

      technologies: [
        'Java',
        'Spring Boot',
        '.NET',
        'Python',
        'Angular',
        'React',
        'Node.js',
        'MySQL',
        'MongoDB'
      ]
    },


    // =====================================================
    // 2. POWER BI & DATA ANALYTICS
    // =====================================================

    {
      title: 'Power BI & Data Analytics',

      icon: 'fas fa-chart-line',

      shortDescription:
        'Transform business data into meaningful insights, dashboards and actionable intelligence.',

      description:
        'We help organizations convert raw data into interactive dashboards, analytical reports and meaningful business insights. Our solutions bring together data from multiple sources and provide decision-makers with a clear view of business performance.',

      features: [
        'Interactive Power BI Dashboards',
        'Business Performance Analytics',
        'Data Cleaning & Transformation',
        'Power Query Development',
        'DAX Measures & Calculations',
        'Data Modeling',
        'KPI & Management Dashboards',
        'Automated Reporting',
        'Multiple Data Source Integration'
      ],

      technologies: [
        'Power BI',
        'DAX',
        'Power Query',
        'SQL',
        'Excel',
        'Python',
        'MySQL',
        'Data Analytics'
      ]
    },


    // =====================================================
    // 3. MOBILE APP DEVELOPMENT
    // =====================================================

    {
      title: 'Mobile App Development',

      icon: 'fas fa-mobile-alt',

      shortDescription:
        'Modern and user-friendly mobile applications built for Android and cross-platform environments.',

      description:
        'We develop mobile applications focused on usability, performance and scalability. Applications can be designed for customer engagement, internal business operations, education, services and other industry-specific requirements.',

      features: [
        'Mobile Application Architecture',
        'Android Application Development',
        'Cross-Platform Applications',
        'API & Backend Integration',
        'Authentication & User Management',
        'Database Integration',
        'Push Notification Integration',
        'Application Testing',
        'Deployment Support'
      ],

      technologies: [
        'Flutter',
        'Dart',
        'Android',
        'Java',
        'REST APIs',
        'Firebase',
        'Node.js',
        'MySQL'
      ]
    },


    // =====================================================
    // 4. WEB APPLICATION DEVELOPMENT
    // =====================================================

    {
      title: 'Web Application Development',

      icon: 'fas fa-globe',

      shortDescription:
        'Responsive, scalable and secure web applications for modern businesses.',

      description:
        'We build responsive and scalable web applications that work across desktops, tablets and mobile devices. Our development approach focuses on clean architecture, performance, security and an intuitive user experience.',

      features: [
        'Responsive Web Applications',
        'Enterprise Web Portals',
        'Customer & Employee Portals',
        'Admin Dashboards',
        'REST API Integration',
        'Database-Driven Applications',
        'Authentication & Authorization',
        'Third-Party API Integration',
        'Performance Optimization'
      ],

      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'Angular',
        'React',
        'Bootstrap',
        'Node.js',
        'Spring Boot'
      ]
    },


    // =====================================================
    // 5. CORPORATE IT TRAINING
    // =====================================================

    {
      title: 'Corporate IT Training',

      icon: 'fas fa-chalkboard-teacher',

      shortDescription:
        'Practical technology training programs designed for corporate teams and professionals.',

      description:
        'We provide customized corporate technology training aligned with organizational requirements and employee skill levels. Training programs combine concepts, demonstrations, hands-on exercises, real-world scenarios and project-oriented learning.',

      features: [
        'Customized Corporate Training',
        'Technology Upskilling Programs',
        'Role-Based Learning Paths',
        'Hands-On Practical Sessions',
        'Real-World Project Scenarios',
        'Assessment & Skill Evaluation',
        'Online & Classroom Training',
        'Beginner to Advanced Programs'
      ],

      technologies: [
        'Java',
        'Python',
        'Spring Boot',
        'Angular',
        'React',
        'SQL',
        'Power BI',
        'Data Science',
        'Cloud Technologies'
      ]
    },


    // =====================================================
    // 6. APPLICATION MODERNIZATION
    // =====================================================

    {
      title: 'Application Modernization',

      icon: 'fas fa-sync-alt',

      shortDescription:
        'Transform legacy applications into modern, scalable and maintainable technology platforms.',

      description:
        'We help organizations modernize legacy applications by improving architecture, technology stacks, performance and maintainability. The modernization approach focuses on minimizing business disruption while gradually moving applications toward modern platforms.',

      features: [
        'Legacy Application Assessment',
        'Architecture Modernization',
        'Technology Stack Migration',
        'Monolith to Modular Architecture',
        'API Enablement',
        'Database Modernization',
        'Cloud Migration Planning',
        'Performance Optimization',
        'Security & Maintainability Improvements'
      ],

      technologies: [
        'Java',
        'Spring Boot',
        '.NET',
        'Angular',
        'React',
        'REST APIs',
        'Microservices',
        'Docker',
        'Cloud'
      ]
    },


    // =====================================================
    // 7. FACULTY DEVELOPMENT PROGRAM
    // =====================================================

    {
      title: 'Faculty Development Program',

      icon: 'fas fa-users-cog',

      shortDescription:
        'Technology-focused faculty development programs that strengthen teaching and industry readiness.',

      description:
        'Our Faculty Development Programs help educators strengthen their technical expertise and adopt practical, industry-oriented teaching methodologies. Programs can be customized for colleges and academic institutions based on curriculum and faculty requirements.',

      features: [
        'Technology Skill Enhancement',
        'Industry-Oriented Training',
        'Hands-On Technical Workshops',
        'Project-Based Learning',
        'Modern Development Tools',
        'Teaching Methodology Enhancement',
        'Emerging Technology Awareness',
        'Practical Lab Planning',
        'Curriculum Alignment'
      ],

      technologies: [
        'Java',
        'Python',
        'Data Science',
        'AI & ML',
        'Power BI',
        'Web Development',
        'Cloud',
        'Database Technologies'
      ]
    },


    // =====================================================
    // 8. INTERNSHIP & PROJECT SUPPORT
    // =====================================================

    {
      title: 'Internship & Project Support',

      icon: 'fas fa-project-diagram',

      shortDescription:
        'Practical internship and project guidance designed to bridge academic learning and industry expectations.',

      description:
        'We provide structured internship and project support for students and aspiring technology professionals. Participants gain exposure to real development practices, project planning, coding standards, documentation, testing and presentation.',

      features: [
        'Industry-Oriented Internship Programs',
        'Final Year Project Guidance',
        'Mini Project Development',
        'Project Planning & Architecture',
        'Coding & Technical Guidance',
        'Database Design',
        'Testing & Debugging',
        'Project Documentation',
        'Project Presentation Preparation'
      ],

      technologies: [
        'Java',
        'Python',
        '.NET',
        'Angular',
        'React',
        'SQL',
        'MongoDB',
        'Power BI',
        'AI & ML'
      ]
    },


    // =====================================================
    // 9. ACADEMIC CURRICULUM TRAINING
    // =====================================================

    {
      title: 'Academic Curriculum Training',

      icon: 'fas fa-university',

      shortDescription:
        'Curriculum-aligned technical training that connects academic concepts with practical industry skills.',

      description:
        'We support educational institutions with structured technical training aligned with academic curricula and current industry expectations. Training can be designed around subjects, laboratories, practical assignments and project requirements.',

      features: [
        'Curriculum-Based Technical Training',
        'Practical Laboratory Sessions',
        'Subject-Wise Technical Workshops',
        'Hands-On Programming Training',
        'Industry-Oriented Assignments',
        'Project-Based Learning',
        'Technical Assessment Support',
        'Faculty Coordination',
        'Student Skill Development'
      ],

      technologies: [
        'C',
        'C++',
        'Java',
        'Python',
        'SQL',
        'Web Technologies',
        'Data Analytics',
        'AI & ML',
        'Cloud Technologies'
      ]
    }

  ];


  // =====================================================
  // OPEN SERVICE POPUP
  // =====================================================

  openService(service: Service): void {

    this.selectedService = service;

    document.body.style.overflow = 'hidden';

  }


  // =====================================================
  // CLOSE POPUP
  // =====================================================

  closeService(): void {

    this.selectedService = null;

    document.body.style.overflow = 'auto';

  }


  // =====================================================
  // CLOSE WITH ESCAPE KEY
  // =====================================================

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {

    if (this.selectedService) {

      this.closeService();

    }

  }

}
