import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogPosts = [
    {
      title: 'Post_1.md',
      description: 'Explorando las últimas tendencias en desarrollo y tecnología...',
      date: '01.05.2024',
    },
    {
      title: 'Post_2.md',
      description: 'Explorando las últimas tendencias en desarrollo y tecnología...',
      date: '02.05.2024',
    },
    {
      title: 'Post_3.md',
      description: 'Explorando las últimas tendencias en desarrollo y tecnología...',
      date: '03.05.2024',
    },
  ];
}
