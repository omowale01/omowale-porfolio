import { Component } from '@angular/core';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      title: 'Web Developer Co-op Student',
      company: 'Gravitit Tech Solutions',
      location: 'Remote',
      date: 'April 2026 - June 2026',
      responsibilities: [
        'Developed and updated pages for a multilingual community website using Next.js and WordPress.',
        'Investigated display and functionality issues and tested fixes across desktop and mobile devices.',
        'Updated website content and WooCommerce product information.',
        'Tracked tasks and code changes with GitHub and collaborated remotely with a small development team.',
      ],
    },

    {
      title: 'IT Support Specialist',
      company: 'Toslad Group',
      location: 'Abuja, Nigeria',
      date: '2019 - 2023',
      responsibilities: [
        'Provided first-level support for Windows computers, printers, software and mobile devices.',
        'Troubleshot hardware, software, connectivity and account-related problems.',
        'Installed and configured applications and devices and assisted users with access issues.',
        'Documented technical problems, troubleshooting actions and resolutions.',
      ],
    },

    {
      title: 'Customer Service and Sales Associate',
      company: 'Jerseygreat Store',
      location: 'Lagos, Nigeria',
      date: '2019 - 2024',
      responsibilities: [
        'Answered customer questions about products and orders, addressed concerns and communicated next steps clearly.',
        'Maintained customer, order and product information and updated listings, prices and inventory data for the online store.',
        'Helped resolve website content and product upload issues, including CSV formatting and display problems.',
        'Coordinated online order and delivery information, followed up on customer requests and kept sales records organized.',
      ],
    },

    {
      title: 'General Manager',
      company: 'Toslad Group',
      location: 'Abuja, Nigeria',
      date: 'January 2023 - June 2024',
      responsibilities: [
        'Directed day-to-day operations and assigned work to staff.',
        'Coordinated with staff, management and clients to resolve service issues.',
        'Supported improvements to digital records, websites and internal IT services.',
        'Oversaw operational reporting, documentation and escalated issues.',
      ],
    },

    {
      title: 'Energy Sales Representative',
      company: 'Summerhill Group',
      location: 'Saint John, NB',
      date: 'September 2024 - December 2024',
      responsibilities: [
        'Explained energy-efficiency programs and answered customer questions.',
        'Collected and maintained accurate customer and activity information.',
        'Shared field updates with the main office to support program follow-up.',
        'Helped train team members on program information and customer communication.',
      ],
    },
  ];
}
