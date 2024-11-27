import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Project_1.exe',
      description: 'Una experiencia digital única combinando diseño y tecnología avanzada.',
      image: '/assets/placeholder.svg', // Cambia por tu ruta real
      technologies: ['React', 'Node.js', 'AI'],
    },
    {
      name: 'Project_2.exe',
      description: 'Una experiencia digital única combinando diseño y tecnología avanzada.',
      image: '/assets/placeholder.svg',
      technologies: ['React', 'Node.js', 'AI'],
    },
    {
      name: 'Project_3.exe',
      description: 'Una experiencia digital única combinando diseño y tecnología avanzada.',
      image: '/assets/placeholder.svg',
      technologies: ['React', 'Node.js', 'AI'],
    },
  ];
}
