import { Injectable } from '@angular/core';
import { ProjectInfo, Tag } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: ProjectInfo[] = [
    {
      id: 1,
      tech: 'projects.youtube.tech',
      info: 'projects.youtube.info',
      title: 'YouTube client app',
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
        'Angular 16',
        'RxJS',
        'NgRx',
        'Jest',
        'REST API',
        'Typescript',
        'ES Lint',
        'Prettier',
        'SCSS',
        'Angular Material',
      ],
    },
    {
      id: 0,
      tech: 'projects.rs-network.tech',
      info: 'projects.rs-network.info',
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
        'Angular 17',
        'RxJS',
        'NgRx',
        'Typescript',
        'ES Lint',
        'Prettier',
        'SCSS',
        'Angular Material',
      ],
      warn: 'projects.rs-network.warn',
    },
    {
      id: 2,
      tech: 'projects.keyboard.tech',
      info: 'projects.keyboard.info',
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
      tech: 'projects.online-store.tech',
      info: 'projects.online-store.info',
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
        'ES Lint',
        'Prettier',
        'Webpack',
        'SCSS',
        'LocalStorage',
        'noUiSlider',
      ],
    },
    {
      id: 4,
      tech: 'projects.online-store.tech',
      info: 'projects.online-store.info',
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
      tech: 'projects.race.tech',
      info: 'projects.race.info',
      title: 'Async Race(game)',
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
      github: 'https://github.com/Kornull/Async-race-game-',
      stack: [Tag.TYPESCRIPT, Tag.SCSS, Tag.WEBPACK],
      'full-stack': [
        'Typescript',
        'ES Lint',
        'REST API',
        'Webpack',
        'SCSS',
        'JS Animation',
      ],
    },
  ];

  defaultData: ProjectInfo = {
    id: 0,
    tech: 'none',
    info: '',
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

  getProjectsByFilter(filterTags: Tag[]): ProjectInfo[] {
    const filteredProjects: ProjectInfo[] = [];

    this.projects.forEach(project => {
      let isFound: boolean = true;

      filterTags.forEach(tag => {
        if (!project.stack.includes(tag)) {
          isFound = false;
        } else {
          isFound = true;
        }

        if (isFound) filteredProjects.push(project);
      });
    });
    return filteredProjects;
  }
}
