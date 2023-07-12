import * as path from 'path';
import fs from 'fs/promises';

export class CreateMarkdown {
  private contentFolder: string;

  constructor() {
    this.contentFolder = path.join(process.cwd());
  }

  public currentPath() {
    console.log('====================================');
    console.log('currentPath');
    console.log(this.contentFolder);
    console.log('====================================');
  }
}
