import { Injectable } from '@nestjs/common';

@Injectable()
export class JournalService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
