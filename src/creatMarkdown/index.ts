import * as path from 'path';
import fs from 'fs/promises';
import { CreateMarkdownProps } from '../interfaces/createMarkdown';

export class CreateMarkdown {
  private contentFolder: string;

  constructor() {
    this.contentFolder = path.join(process.cwd());
  }

  /**
   * The function `generateFile` generates a markdown file with the specified `fileName` in the
   * `folderName` directory.
   * @param {CreateMarkdownProps}  - - `fileName`: The name of the file to be generated.
   */
  public async generateFile({ fileName, folderName, content }: CreateMarkdownProps) {
    if (!fileName || fileName === '') throw new Error('fileName is missing');
    if (!folderName || folderName === '') throw new Error('folderName is missing');
    if (!content || content === '') throw new Error('content is missing');

    // const fileName = 'markdown_test.md';
    const targetRoute = `${this.contentFolder}/${folderName}`;
    const route = `${targetRoute}/${fileName}`;
    const folderExist = await this.checkFolderExistence(targetRoute);
    if (folderExist) {
      this.writeFile(route, content);
    }
  }

  private async writeFile(path: string, content: string): Promise<void> {
    try {
      process.stdout.write('Escribiendo archivo... ');
      await fs.writeFile(path, content, 'utf-8');
      console.log(`Se ha escrito el archivo en la ruta: ${path}`);
    } catch (error) {
      throw new Error(`Error al escribir el archivo en la ruta ${path}: ${(error as Error).message}`);
    }
  }

  private async checkFolderExistence(path: string): Promise<boolean> {
    try {
      await fs.access(path);
      const folderStats = await fs.stat(path);
      if (folderStats.isDirectory()) {
        // La carpeta ya existe
        return true;
      } else {
        throw new Error(`La ruta ${path} no es una carpeta`);
      }
    } catch (error) {
      // @ts-ignore
      if (error instanceof Error && error?.code === 'ENOENT') {
        // La carpeta no existe, crearla
        await fs.mkdir(path);
        return true;
      } else {
        console.log('====================================');
        console.log('error');
        console.log(error);
        console.log('====================================');
        throw new Error(`Error al acceder a la ruta ${path}`);
      }
    }
  }
}