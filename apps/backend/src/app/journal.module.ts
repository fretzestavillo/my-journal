import { Module } from '@nestjs/common';
import { JournalController } from './journal.controller';
import { JournalService } from './journal.service';

@Module({
  imports: [],
  controllers: [JournalController],
  providers: [JournalService],
})
export class JournalModule {}
