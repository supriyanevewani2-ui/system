import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

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


  courses = [

    {
      title: ' Java Full Stack Development With AI',
      icon: 'fab fa-java',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      mode: 'Online / Offline',

      description:
        'Complete Full Stack Java Development course covering Core Java, Advanced Java, Spring Boot, Hibernate, JPA, REST API, SQL, React and real-world projects.',

      technologies: [
        'Core Java',
        'Advanced Java',
        'Spring Boot',
        'Hibernate',
        'JPA',
        'REST API',
        'MySQL',
        'React'
      ]
    },

    {
      title: 'Python Full Stack Development With AI',
      icon: 'fab fa-python',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      mode: 'Online / Offline',

      description:
        'Learn Python Full Stack Development with Python, Django, Flask, REST API, SQL, HTML, CSS, JavaScript and real-world applications.',

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

    {
      title: 'Angular Development',
      icon: 'fab fa-angular',
      duration: '3 Months',
      level: 'Intermediate',
      mode: 'Online / Offline',

      description:
        'Complete Angular course covering components, services, routing, forms, HTTP Client, API integration and professional projects.',

      technologies: [
        'Angular',
        'TypeScript',
        'HTML',
        'CSS',
        'Bootstrap',
        'REST API'
      ]
    },

    {
      title: 'React Development',
      icon: 'fab fa-react',
      duration: '3 Months',
      level: 'Intermediate',
      mode: 'Online / Offline',

      description:
        'Build modern responsive web applications using React with components, hooks, routing, API integration and projects.',

      technologies: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'Bootstrap',
        'REST API'
      ]
    },

    {
      title: 'Spring Boot & Microservices',
      icon: 'fas fa-leaf',
      duration: '3 Months',
      level: 'Advanced',
      mode: 'Online / Offline',

      description:
        'Advanced Spring Boot training including REST APIs, Spring Data JPA, Security, JWT, Microservices and database integration.',

      technologies: [
        'Spring Boot',
        'Spring Security',
        'JWT',
        'JPA',
        'Hibernate',
        'Microservices',
        'MySQL'
      ]
    },

    {
      title: 'Data Analytics with Python',
      icon: 'fas fa-chart-line',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      mode: 'Online / Offline',

      description:
        'Learn Data Analytics using Python, NumPy, Pandas, Matplotlib, data cleaning, visualization and practical datasets.',

      technologies: [
        'Python',
        'NumPy',
        'Pandas',
        'Matplotlib',
        'Data Analysis',
        'Data Visualization'
      ]
    }

  ];


  // =====================================================
  // OPEN ENROLLMENT POPUP
  // =====================================================

  openEnrollment(courseName: string): void {

    this.selectedCourse = courseName;

    this.formData.course = courseName;

    this.successMessage = '';
    this.errorMessage = '';

    this.showEnrollmentForm = true;

    document.body.style.overflow = 'hidden';
  }


  // =====================================================
  // CLOSE POPUP
  // =====================================================

  closeEnrollment(): void {

    this.showEnrollmentForm = false;

    document.body.style.overflow = 'auto';

    this.successMessage = '';
    this.errorMessage = '';

    this.isSubmitting = false;
  }


  // =====================================================
  // SUBMIT FORM
  // =====================================================

  submitEnrollment(form: NgForm): void {

    // Check Angular form validation
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


    // Get values from Angular form
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


    // =====================================================
    // CREATE FORMSPREE DATA
    // =====================================================

    const formData = new URLSearchParams();

    formData.append('_subject',
      'New Course Enrollment - FirstCodeFoundation');

    formData.append('course',
      data.course);

    formData.append('firstName',
      data.firstName);

    formData.append('lastName',
      data.lastName);

    formData.append('contactNumber',
      data.contactNumber);

    formData.append('email',
      data.email);

    formData.append('qualification',
      data.qualification);

    formData.append('message',
      data.message);


    // =====================================================
    // SEND TO FORMSPREE
    // =====================================================

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

          // Reset form
          form.resetForm({
            course: this.selectedCourse
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
                  .map((error: any) => error.message)
                  .join(', ');

            }

          }

          catch {

            // Keep default error message
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

