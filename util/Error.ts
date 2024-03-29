import { ICommand } from '../Commander';

export class NotLoadedError implements Error {
  name: string = 'NotLoadedError';
  message: string;
  stack?: string;
  constructor(Command: ICommand) {
    this.message = `Failed to load ${Command.Name}.`;
  }
}
