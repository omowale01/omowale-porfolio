import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects: Project[] = [

    {
      title: 'Bowling Tournament Application',
      description:
        'A web application developed to manage bowling tournament information using ASP.NET Core MVC and database-driven functionality.',
      technologies: [
        'C#',
        'ASP.NET Core MVC',
        'Entity Framework Core'
      ],
      githubUrl:
        'https://github.com/omowale01/Bowling-Tournament-Final-Project-for-Software-Architecture'
    },

    {
      title: 'Automobile Software',
      description:
        'A software development project demonstrating object-oriented programming concepts and application development.',
      technologies: [
        'C#',
        'Object-Oriented Programming'
      ],
      githubUrl:
        'https://github.com/omowale01/Automobile-software'
    },

    {
      title: 'Employee Compensation',
      description:
        'A TypeScript application demonstrating classes, inheritance, interfaces and object-oriented programming concepts.',
      technologies: [
        'TypeScript',
        'Object-Oriented Programming',
        'Interfaces',
        'Inheritance'
      ]
    },

    {
      title: 'Peru Baila Cultural Website',
      description:
        'A multilingual cultural association website developed during my web development co-op, including responsive pages, WordPress content and WooCommerce functionality.',
      technologies: [
        'Next.js',
        'WordPress',
        'WooCommerce',
        'Git',
        'GitHub'
      ],
      liveUrl:
        'https://perubaila.com'
    },

    {
      title: 'Lucia Nutri Foods Website',
      description:
        'A responsive website project developed to provide an online presence for Lucia Nutri Foods.',
      technologies: [
        'Web Development'
      ],
      liveUrl:
        'https://lucianutrifoods.com'
    }

  ];

}