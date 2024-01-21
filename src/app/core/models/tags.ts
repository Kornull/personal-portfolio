export class Tag {
  static ANGULAR = new Tag('Angular', '#FF0000', '#fff');

  static REACT = new Tag('React', '#1E90FF', '#fff');

  static NEXTJS = new Tag('NextJS', '#000', '#fff');

  static TYPESCRIPT = new Tag('Typescript', '#0000FF', '#fff');

  static JS = new Tag('JavaScriptt', '#FFFF00', '#000');

  static SCSS = new Tag('SCSS', '#FF00FF', '#fff');

  static CSS = new Tag('CSS', '#0000CD', '#fff');

  static WEBPACK = new Tag('Webpack', '#00BFFF', '#000');

  static RXJS = new Tag('RxJS', '#C71585', '#fff');

  static NgRx = new Tag('NgRx', '#4B0082', '#fff');

  static REDUXTOOLKIT = new Tag('Redux Toolkit', '#6A5ACD', '#fff');

  static SSR = new Tag('SSR', '#2F4F4F', '#fff');

  static HTML = new Tag('HTML', '#CD5C5C', '#fff');

  static ZUSTANG = new Tag('Zustang', '#FFA500', '#000');

  private constructor(
    readonly key: string,
    readonly color: string,
    readonly colorText: string
  ) {}

  toTitle(): string {
    return this.key;
  }
}
