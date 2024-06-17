import { Component, signal } from '@angular/core';
import { ThemeService } from 'src/app/Services/theme.service';


export type MenuItem = {
  img: string;
  label: string;
  description: string;
}

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

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

  workExperiences: Experience[] = [
    {
      company: 'Company Name',
      position: 'Front-End & Full-Stack Developer',
      startDate: 'Jan 2022',
      endDate: 'Present',
      highlights: [
        'Developed and maintained highly responsive and user-friendly Angular web applications.',
        'Integrated various front-end technologies like Bootstrap, SCSS, and JavaScript frameworks.',
        'Built robust back-end APIs using [insert technology (e.g., Node.js, Python)].',
        'Collaborated effectively with designers and back-end developers to deliver successful projects.',
      ]
    }
  ]


  projects = [
    {
      name: 'Inferno-blog',
      description: 'Crafted Inferno-blog, an Angular + Firebase   application, focusing on seamless CRUD    operations and elegant data storage. Utilized    operations and elegant data storage. Utilized  user-friendly features.',
      image: '/assets/project1.jpeg',
      github: 'https://github.com/seemakhatri?tab=repositories',
      demo: 'https://inferno-blog.web.app/'
    },
    {
      name: 'XO Xplosion',
      description: 'XO Xplosion is an engaging web-based game that brings the timeless classic of Tic-Tac-Toe to your browser. Developed using modern web technologies such as HTML, CSS, and JavaScript, this game offers a sleek and interactive user interface.',
      image: '/assets/xo.jpg',
      github: 'https://github.com/seemakhatri/XO-Xplosion',
      demo: 'https://inferno-blog.web.app/'
    },    
    {
      name: 'GymSwift RegiFit',
      description: 'Get Fit, Get Registered – Your Passport to Gym Excellence!',
      image: '/assets/gym.jpg',
      github: 'https://github.com/seemakhatri/GYM-Registration',
      demo: 'https://inferno-blog.web.app/'
    },
    {
      name: 'Crypto Checker',
      description: 'Angular-powered crypto checker app providing real-time data on cryptocurrencies using the Coingecko API, offering essential insights for investors and enthusiasts.',
      image: '/assets/crypto-currency-wallet.jpg',
      github: 'https://github.com/seemakhatri/crypto-checker',
      demo: 'https://inferno-blog.web.app/'
    },
    {
      name: 'Pro Trackify',
      description: 'Crafted Inferno-blog, an Angular + Firebase   application, focusing on seamless CRUD    operations and elegant data storage. Utilized    operations and elegant data storage. Utilized  user-friendly features.',
      image: '/assets/clockify.jpeg',
      github: 'https://github.com/seemakhatri/clockify',
      demo: 'https://inferno-blog.web.app/'
    },
    {
      name: 'Inferno-blog',
      description: 'Crafted Inferno-blog, an Angular + Firebase   application, focusing on seamless CRUD    operations and elegant data storage. Utilized    operations and elegant data storage. Utilized  user-friendly features.',
      image: '/assets/project1.jpeg',
      github: 'https://github.com/seemakhatri?tab=repositories',
      demo: 'https://inferno-blog.web.app/'
    },
  ];


}

