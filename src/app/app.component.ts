import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from "./components/hero/hero.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogsComponent } from "./components/blogs/blogs.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, ProjectsComponent, BlogsComponent, ContactComponent ,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
