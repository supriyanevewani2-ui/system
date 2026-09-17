import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-coursess',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './coursess.component.html',
  styleUrl: './coursess.component.css'
})
export class CoursessComponent {



  showEnrollmentForm = false;
  isSubmitting = false;

  successMessage = '';
  errorMessage = '';

  selectedCourse = '';

  formData = {
    course: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    qualification: '',
    message: ''
  };


  // =========================================================
  // COURSES
  // =========================================================

  courses = [

    // =======================================================
    // 1. GEN AI & PROMPT ENGINEERING
    // =======================================================

    {
      title: 'Generative AI & Prompt Engineering',

      icon: 'fas fa-robot',

      duration: '3 Months',

      level: 'Beginner to Advanced',

      mode: 'Online / Offline',

      description:
        'Learn Generative AI, Large Language Models, prompt engineering, AI tools and practical AI application development.',

      technologies: [
        'Generative AI',
        'Prompt Engineering',
        'ChatGPT',
        'LLMs',
        'AI Tools',
        'RAG',
        'AI Agents',
        'Python'
      ]
    },


    // =======================================================
    // 2. DATA SCIENCE & AI
    // =======================================================

    {
      title: 'Data Science & Artificial Intelligence',

      icon: 'fas fa-brain',

      duration: '6 Months',

      level: 'Beginner to Advanced',

      mode: 'Online / Offline',

      description:
        'Complete Data Science and AI program covering Python, statistics, machine learning, deep learning, data visualization and real-world AI projects.',

      technologies: [
        'Python',
        'NumPy',
        'Pandas',
        'Matplotlib',
        'Statistics',
        'Machine Learning',
        'Deep Learning',
        'AI'
      ]
    },

 // =======================================================
    // 11. INVESTMENT BANKING WITH AI
    // =======================================================

    {
      title: 'Investment Banking with AI',

      icon: 'fas fa-chart-line',

      duration: '6 Months',

      level: 'Advanced',

      mode: 'Online / Offline',

      description:
        'Advanced Investment Banking program covering AI-powered financial analysis, Advanced Excel, Power BI, financial markets and instruments, banking operations, equity research, M&A and valuation strategies.',

      technologies: [
        'AI in Investment Banking',
        'Advanced Excel',
        'Power BI',
        'Financial Markets',
        'Financial Instruments',
        'Banking Operations',
        'Investment Banking',
        'Equity Research',
        'M&A',
        'Valuation Strategies'
      ]
    },
    // =======================================================
    // 3. DATA ENGINEERING
    // =======================================================

    {
      title: 'Data Engineering',

      icon: 'fas fa-database',

      duration: '6 Months',

      level: 'Intermediate to Advanced',

      mode: 'Online / Offline',

      description:
        'Build modern data pipelines and data platforms using SQL, Python, ETL, data warehousing, Spark and cloud technologies.',

      technologies: [
        'Python',
        'SQL',
        'ETL',
        'Data Pipelines',
        'PySpark',
        'Apache Spark',
        'Data Warehouse',
        'Cloud'
      ]
    },


    // =======================================================
    // 4. BUSINESS INTELLIGENCE & ANALYTICS
    // =======================================================

    {
      title: 'Business Intelligence & Analytics',

      icon: 'fas fa-chart-pie',

      duration: '4 Months',

      level: 'Beginner to Advanced',

      mode: 'Online / Offline',

      description:
        'Learn business analytics, data visualization, Power BI, SQL, Power Query, DAX and interactive dashboard development.',

      technologies: [
        'Power BI',
        'SQL',
        'Power Query',
        'DAX',
        'Data Modeling',
        'Excel',
        'Dashboards',
        'Analytics'
      ]
    },


    // =======================================================
    // 5. JAVA FULL STACK
    // =======================================================

    {
      title: 'Java Full Stack Development',

      icon: 'fab fa-java',

      duration: '6 Months',

      level: 'Beginner to Advanced',

      mode: 'Online / Offline',

      description:
        'Complete Java Full Stack Development program covering Core Java, Advanced Java, Spring Boot, Hibernate, REST APIs, databases and modern frontend development.',

      technologies: [
        'Core Java',
        'Advanced Java',
        'Spring Boot',
        'Hibernate',
        'JPA',
        'REST API',
        'MySQL',
        'Angular'
      ]
    },


    // =======================================================
    // 6. PYTHON FULL STACK
    // =======================================================

    {
      title: 'Python Full Stack Development',

      icon: 'fab fa-python',

      duration: '6 Months',

      level: 'Beginner to Advanced',

      mode: 'Online / Offline',

      description:
        'Build complete web applications using Python, Django, Flask, REST APIs, databases and modern frontend technologies.',

      technologies: [
        'Python',
        'Django',
        'Flask',
        'REST API',
        'MySQL',
        'HTML',
        'CSS',
        'JavaScript'
      ]
    },


    // =======================================================
    // 7. .NET FULL STACK
    // =======================================================

    {
      title: '.NET Full Stack Development',

      icon: 'fab fa-microsoft',

      duration: '6 Months',

      level: 'Beginner to Advanced',

      mode: 'Online / Offline',

      description:
        'Learn complete .NET Full Stack Development using C#, ASP.NET Core, Web API, Entity Framework, SQL Server and modern frontend technologies.',

      technologies: [
        'C#',
        '.NET',
        'ASP.NET Core',
        'Web API',
        'Entity Framework',
        'SQL Server',
        'Angular',
        'JavaScript'
      ]
    },


    // =======================================================
    // 8. DATABASE TECHNOLOGIES
    // =======================================================

    {
      title: 'Database Technologies',

      icon: 'fas fa-server',

      duration: '3 Months',

      level: 'Beginner to Advanced',

      mode: 'Online / Offline',

      description:
        'Master relational and NoSQL databases, SQL programming, database design, optimization, transactions and practical database development.',

      technologies: [
        'MySQL',
        'PostgreSQL',
        'SQL Server',
        'Oracle',
        'MongoDB',
        'SQL',
        'Database Design',
        'Optimization'
      ]
    },


    // =======================================================
    // 9. FRONT END DEVELOPMENT
    // =======================================================

    {
      title: 'Front End Development',

      icon: 'fas fa-code',

      duration: '4 Months',

      level: 'Beginner to Advanced',

      mode: 'Online / Offline',

      description:
        'Develop modern responsive web applications using HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular and React.',

      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'Bootstrap',
        'Angular',
        'React',
        'Responsive Design'
      ]
    },


    // =======================================================
    // 10. TEST AUTOMATION
    // =======================================================

    {
      title: 'Test Automation',

      icon: 'fas fa-vial',

      duration: '4 Months',

      level: 'Beginner to Advanced',

      mode: 'Online / Offline',

      description:
        'Learn modern software test automation including Selenium and Playwright, API testing, test frameworks, automation scripting and CI/CD integration.',

      technologies: [
        'Selenium',
        'Playwright',
        'Java',
        'Python',
        'API Testing',
        'TestNG',
        'JUnit',
        'CI/CD'
      ]
    }
    
   

  ];


  // =========================================================
  // OPEN ENROLLMENT POPUP
  // =========================================================

  openEnrollment(courseName: string): void {

    this.selectedCourse = courseName;

    this.formData.course = courseName;

    this.successMessage = '';
    this.errorMessage = '';

    this.showEnrollmentForm = true;

    document.body.style.overflow = 'hidden';
  }


  // =========================================================
  // CLOSE POPUP
  // =========================================================

  closeEnrollment(): void {

    this.showEnrollmentForm = false;

    document.body.style.overflow = 'auto';

    this.successMessage = '';
    this.errorMessage = '';

    this.isSubmitting = false;
  }


  // =========================================================
  // SUBMIT ENROLLMENT
  // =========================================================

  submitEnrollment(form: NgForm): void {

    if (form.invalid) {

      Object.keys(form.controls).forEach(controlName => {

        form.controls[controlName].markAsTouched();

      });

      this.errorMessage =
        'Please fill all required fields correctly.';

      return;
    }


    this.isSubmitting = true;

    this.successMessage = '';
    this.errorMessage = '';


    // =======================================================
    // FORM DATA
    // =======================================================

    const data = {

      course: this.selectedCourse,

      firstName:
        form.value.firstName || '',

      lastName:
        form.value.lastName || '',

      contactNumber:
        form.value.contactNumber || '',

      email:
        form.value.email || '',

      qualification:
        form.value.qualification || '',

      message:
        form.value.message || ''

    };


    // =======================================================
    // FORMSPREE REQUEST
    // =======================================================

    const formData = new URLSearchParams();

    formData.append(
      '_subject',
      'New Course Enrollment - FirstCodeFoundation'
    );

    formData.append(
      'course',
      data.course
    );

    formData.append(
      'firstName',
      data.firstName
    );

    formData.append(
      'lastName',
      data.lastName
    );

    formData.append(
      'contactNumber',
      data.contactNumber
    );

    formData.append(
      'email',
      data.email
    );

    formData.append(
      'qualification',
      data.qualification
    );

    formData.append(
      'message',
      data.message
    );


    // =======================================================
    // SEND
    // =======================================================

    fetch(
      'https://formspree.io/f/xljegllv',
      {

        method: 'POST',

        headers: {

          'Content-Type':
            'application/x-www-form-urlencoded',

          'Accept':
            'application/json'

        },

        body:
          formData.toString()

      }
    )

      .then(async response => {

        if (response.ok) {

          this.successMessage =
            'Thank you! Your enrollment request has been submitted successfully.';

          this.isSubmitting = false;

          form.resetForm({

            course:
              this.selectedCourse

          });

        }

        else {

          let errorText =
            'Unable to submit your enrollment request.';

          try {

            const result =
              await response.json();

            if (result?.errors?.length) {

              errorText =
                result.errors
                  .map(
                    (error: any) =>
                      error.message
                  )
                  .join(', ');

            }

          }

          catch {

            // Default error message

          }

          this.errorMessage =
            errorText;

          this.isSubmitting = false;

        }

      })


      .catch(error => {

        console.error(
          'Enrollment error:',
          error
        );

        this.errorMessage =
          'Something went wrong. Please check your internet connection and try again.';

        this.isSubmitting = false;

      });

  }

}
