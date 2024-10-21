import { Controller, Get } from '@nestjs/common';
import { JournalService } from './journal.service';

@Controller()
export class JournalController {
  constructor(private readonly journalService: JournalService) {}

  @Get()
  getData() {
    return this.journalService.getData();
  }
}
