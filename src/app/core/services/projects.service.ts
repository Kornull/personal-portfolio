import { Injectable } from '@angular/core';
import { ProjectInfo, Tag } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: ProjectInfo[] = [
    {
      id: 1,
      tech: 'Angular Application: YouTube video search app using Google API.',
      info: 'YouTube video search application. User can sort search results by date, views, can also filter results by video title, add cards to favourites, create your own cards, view full information about the video. To use the application, the user must be logged in.',
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
      tech: 'Angular Application: Connections project with real backend.',
      info: 'Application represents the platform to allow users to communicate via public text messages. Before starting to use the service a guest must register and sign in. Authorized user can see vertically divided main page, where left side is a list of public group and right side is a list of people including personal conversations. Each user can create own public group and broadcast messages there or use existing group along with other participants. Personal information can be viewed on a special profile page, where it can be immediately edited.',
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
      warn: 'Please use a fake email!',
    },
    {
      id: 2,
      tech: 'The generation of DOM elements is implemented. body in the index.html is empty',
      info: `The virtual keyboard is able to switch between two language layouts (En + Ru language).Processing of keystrokes on the keyboard, interaction between the keyboard and mouse. All HTML generation takes place in the application script, the HTML file is empty.
      The buttons on the virtual keyboard display symbols of a selected language.
      The application saves a chosen language after the page is reloaded and displays the keyboard on that language.
       Clicks on the buttons with a mouse on the virtual keyboard and pressing keys on a physical keyboard should input symbols to the text area located on the page above the virtual keyboard.
      The keyboard shortcut for changing language indicated on the page  it clear for a user how to switch keyboard layout.`,
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
      tech: 'Online store of laptops created on Typescrypt without HTML',
      info: `Online store created on Typescript 
      User can sort product cards by Search bar, multiple sorting options: Name, Year, Color, Stock, Quantity, Popular. 
      You can also add items to cart and remove them from it.
      Reset search parameters, reset local store settings, all data will be saved in local store.
      Minimum resolution of the application is 768 pixels.
      All HTML generation is done in application script, HTML file is empty.`,
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
      tech: 'JavaScript project: Website of a pet shelter (Landing page)',
      info: `Animal shelter website is a landing page made using technologies such as JavaScript, HTML, CSS, Webpack.
      This project implements: burger menu, custom sliders, popup with additional information about the card, pagination, mobile version, 
      tracking positions and screen size.`,
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
      tech: 'SPA (single page application). It is written in Typescript without using any frameworks.',
      title: 'Async Race(game)',
      info: `SPA on Typescript. User can switch between two pages - Garage and Winners table.
      In the race it is possible to race all cars simultaneously or each one in turn.
      User can create a custom car or create 100 random cars at once in one click.`,
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
