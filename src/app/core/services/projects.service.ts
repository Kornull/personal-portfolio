import { Injectable } from '@angular/core';
import { ProjectInfo, Tag } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: ProjectInfo[] = [
    {
      id: 0,
      tech: 'angular',
      'full-info':
        'main search form on the main page, header with the search form on the search result page, main search results page, search results page, pagination, metadata update, api calls, card component with search result data (text / links / images ), routing, loading component, no result component, error component, viewing the site with 320 pixels resolution (mobile version),',
      title: 'Youtybe App',
      image: [
        'assets/youtube/y-1.png',
        'assets/youtube/y-2.png',
        'assets/youtube/y-3.png',
        'assets/youtube/y-4.png',
        'assets/youtube/y-5.png',
        'assets/youtube/y-6.png',
      ],
      link: 'https://kornull-angular.netlify.app/',
      github: 'https://github.com/Kornull/Youtube-App',
      stack: [Tag.ANGULAR, Tag.RXJS, Tag.NGRX, Tag.SCSS],
      'full-stack': [
        'NextJs',
        'Typescript',
        'Routing',
        'React Hooks',
        'React Icons',
        'REST API',
        'Tailwind.css',
        'EsLint',
        'Google Developers API',
        'eXTReMe-IP-LOOKUP API',
        'Random word API',
      ],
    },
    {
      id: 1,
      tech: 'amgular',
      'full-info':
        'registration, authorization, profile, localization(i18next), reusable form component, menu burger,header project styling(material Ui), application and backend deployment.',
      title: 'RS-Network',
      image: [
        'assets/network/net-1.png',
        'assets/network/net-2.png',
        'assets/network/net-3.png',
        'assets/network/net-4.png',
        'assets/network/net-5.png',
        'assets/network/net-6.png',
      ],
      link: 'https://kornull-rs-network.netlify.app/',
      github: 'https://github.com/Kornull/rs-network',
      stack: [Tag.ANGULAR, Tag.RXJS, Tag.NGRX, Tag.SCSS],
      'full-stack': [
        'React',
        'Typescript',
        'Redux Toolkit',
        'RTK Query',
        'React Hooks',
        'React Router',
        'Localization(i18next)',
        'SCSS.modules',
        'MAterial UI',
      ],
    },
    {
      id: 2,
      tech: 'javascript',
      'full-info':
        'processing of keystrokes on the keyboard, interaction between the keyboard and mouse, language changes, localStorage, webpack. All HTML generation takes place in the application script, the HTML file is empty.      ',
      title: 'Virtual keyboard',
      image: [
        'assets/keyboard/k-1.png',
        'assets/keyboard/k-2.png',
        'assets/keyboard/k-3.png',
        'assets/keyboard/k-4.png',
      ],
      link: 'https://kornull.github.io/virtualKeyboard/keyboard/',
      github: 'https://github.com/Kornull/virtualKeyboard',
      stack: [Tag.JS, Tag.WEBPACK, Tag.SCSS],
      'full-stack': ['JavaScript', 'Webpack', 'SCSS', 'LocalStorage'],
    },
    {
      id: 3,
      tech: 'typescript',
      'full-info': 'react',
      title: 'Online store',
      image: [
        'assets/shop/st-1.png',
        'assets/shop/st-2.png',
        'assets/shop/st-3.png',
        'assets/shop/st-4.png',
      ],
      link: 'https://kornull.github.io/Online-store/store/',
      github: 'https://github.com/Kornull/Online-store',
      stack: [Tag.TYPESCRIPT, Tag.WEBPACK, Tag.SCSS],
      'full-stack': [
        'Typescript',
        'Webpack',
        'SCSS',
        'LocalStorage',
        'noUiSlider',
      ],
    },
    {
      id: 4,
      tech: 'javascript',
      'full-info':
        'burger menu, custom slider, popup with additional information about the card, pagination, mobile version, tracking positions and screen size.',
      title: 'Shelter',
      image: [
        'assets/pet/p-1.png',
        'assets/pet/p-2.png',
        'assets/pet/p-3.png',
        'assets/pet/p-4.png',
      ],
      link: 'https://kornull-shelder.netlify.app/',
      github: 'https://github.com/Kornull/Shelter',
      stack: [Tag.JS, Tag.WEBPACK, Tag.SCSS, Tag.HTML],
      'full-stack': ['JavaScript', 'Webpack', 'HTML', 'SCSS'],
    },
    {
      id: 5,
      tech: 'typescript',
      title: 'Async Race(game)',
      'full-info': 'react',
      image: [
        'assets/race/r-1.png',
        'assets/race/r-2.png',
        'assets/race/r-3.png',
        'assets/race/r-4.png',
        'assets/race/r-5.png',
        'assets/race/r-6.png',
        'assets/race/r-7.png',
        'assets/race/r-8.png',
      ],
      link: 'https://kornull-async-race.netlify.app/',
      github: 'https://github.com/Kornull/RS-School-Stage-1-2/tree/asynk-race',
      stack: [Tag.TYPESCRIPT, Tag.SCSS, Tag.WEBPACK],
      'full-stack': ['JavaScript', 'HTML', 'CSS'],
    },
  ];

  defaultData: ProjectInfo = {
    id: 0,
    tech: 'none',
    'full-info': '',
    title: 'Something were wrong',
    image: ['src/assets/imageProjects/shelter.webp'],
    link: '',
    github: '',
    stack: [],
    'full-stack': [],
  };

  getProjects(): ProjectInfo[] {
    return this.projects;
  }

  getOneProject(id: number): ProjectInfo {
    const projectDetails = this.projects.find(project => project.id === id);

    if (projectDetails === undefined) return this.defaultData;

    return projectDetails;
  }
}
