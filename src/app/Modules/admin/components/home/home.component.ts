import { Component, signal } from '@angular/core';
import { ThemeService } from 'src/app/Services/theme.service';

export type MenuItem = {
  img: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private themeService: ThemeService) {}

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  get isDarkMode() {
    return this.themeService.isDarkModeEnabled();
  }


  menuItem = signal<MenuItem[]>([
    {
      img: '/assets/angular_gradient.png',
      label: 'Angular',
      description: 'Framework for developing dynamic and interactive web applications.'
    },
    {
      img: '/assets/C_Sharp_logo.png',
      label: '.NET',
      description: 'Framework for building scalable and robust web and desktop applications.'
    },
    {
      img: '/assets/Azure-Logo-2020-present.png',
      label: 'Azure',
      description: 'Cloud computing platform for deploying, managing, and scaling applications.'
    },
    {
      img: '/assets/Docker-Symbol.png',
      label: 'Docker',
      description: 'Tool for packaging applications and their dependencies into containers for easy deployment.'
    }    
  ]);
}
