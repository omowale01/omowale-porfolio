import { Component } from '@angular/core';

interface EducationItem {
  program: string;
  school: string;
  location: string;
  date: string;
  status?: string;
}

interface Certificate {
  name: string;
  organization: string;
  date: string;
}

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  education: EducationItem[] = [
    {
      program: 'Diploma in Software Development',
      school: 'New Brunswick Community College (NBCC)',
      location: 'Saint John, New Brunswick',
      date: 'Expected December 2026',
      status: 'In Progress',
    },

    {
      program: 'Chemistry SCience',
      school: 'University of Lagos',
      location: 'Lagos, Nigeria',
      date: '2017',
      status: '',
    },
  ];

  certificates: Certificate[] = [
    {
      name: 'Full Stack Development',
      organization: 'HIIT PLC, Nigeria',
      date: '2021',
    },

    {
      name: 'Web Accessibility Training',
      organization: 'UNICEF',
      date: 'May 2021',
    },

    {
      name: 'Web Designing and Publishing',
      organization: 'University of Lagos Computer Centre',
      date: '2014',
    },
  ];
}
