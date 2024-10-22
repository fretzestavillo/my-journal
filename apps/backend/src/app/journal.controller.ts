import { Body, Controller, Get, Post } from '@nestjs/common';
import { JournalService } from './journal.service';
import { MessageDto } from './journal.dto';
import { JournalEntity } from './journal.entity';

@Controller('journal')
export class JournalController {
  constructor(private readonly journalService: JournalService) {}

  @Get()
  getData() {
    return this.journalService.getData();
  }

  @Post()
  postData(@Body() message: MessageDto): Promise<JournalEntity> {
    console.log(message.title, message.content);
    return this.journalService.postData(message);
  }
}
