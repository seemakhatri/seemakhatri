import { Component, signal } from '@angular/core';

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
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


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
      name: 'Dynamic Market Insights Platform',
      description: 'Developed an innovative Angular-based system to deliver real-time updates on the UK and US stock markets. Integrated features include live market status, detailed corporate actions (dividends, stock splits), and market forecasts for informed decision-making. Currently expanding to integrate actual market data feeds and advanced analytics. Designed to empower investors and financial professionals with comprehensive tools for strategic investment planning.',
      image: '/assets/projects/hl.jpeg',
      github: 'https://github.com/seemakhatri/hl',
      demo: 'https://hargreaves-lansdown.onrender.com'
    },
    {
      name: 'Online Chess',
      description: 'Introducing an exciting online chess game built with Node.js, TypeScript, and React Vite! This dynamic application leverages WebSocket for real-time multiplayer interaction, ensuring seamless gameplay. Designed with Tailwind CSS, it features a sleek and modern interface. Powered by the chess.js library, players can engage in strategic battles with ease. Challenge your friends or take on opponents worldwide—let the game begin!',
      image: '/assets/projects/chess.JPEG',
      github: 'https://github.com/seemakhatri/playChess',
    },

    {
      name: 'Employee App',
      description: 'Developed an Angular web app for managing employee data with add/edit/delete functionality, leveraging IndexedDB for local data persistence. Integrated a custom date picker, while ensuring responsive layouts for tablet and desktop. Built with Angular v16, using Signals for efficient state management, and hosted on Firebase for free deployment.',
      image: '/assets/projects/employee.jpeg',
      github: 'https://github.com/seemakhatri/angular-web-app',
      demo: 'https://angular-web-app-c4358.web.app/'
    },

    {
      name: 'Inferno-blog',
      description: 'Crafted Inferno-blog, an Angular + Firebase   application, focusing on seamless CRUD    operations and elegant data storage. Utilized    operations and elegant data storage. Utilized  user-friendly features.',
      image: '/assets/projects/project1.jpeg',
      github: 'https://github.com/seemakhatri?tab=repositories',
      demo: 'https://inferno-blog.web.app/'
    },
    {
      name: 'XO Xplosion',
      description: 'XO Xplosion is an engaging web-based game that brings the timeless classic of Tic-Tac-Toe to your browser. Developed using web technologies such as HTML, CSS, and JavaScript, this game offers a sleek and interactive user interface.',
      image: '/assets/projects/xo.jpg',
      github: 'https://github.com/seemakhatri/XO-Xplosion'
    },    
    {
      name: 'GymSwift RegiFit',
      description: 'Get Fit, Get Registered – Your Passport to Gym Excellence!',
      image: '/assets/projects/gym.jpg',
      github: 'https://github.com/seemakhatri/GYM-Registration'
    },
    {
      name: 'Crypto Checker',
      description: 'Angular-powered crypto checker app providing real-time data on cryptocurrencies using the Coingecko API, offering essential insights for investors and enthusiasts.',
      image: '/assets/projects/crypto-currency-wallet.jpg',
      github: 'https://github.com/seemakhatri/crypto-checker'
    },
    {
      name: 'Pro Trackify',
      description: 'Developed ProTrackify, an Angular-based time-tracking and productivity tool inspired by Clockify, featuring intuitive project management and detailed analytics.',
      image: '/assets/projects/clockify.jpeg',
      github: 'https://github.com/seemakhatri/clockify'
    },
  ];
}
