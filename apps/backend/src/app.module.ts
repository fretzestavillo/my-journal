import { Module } from '@nestjs/common';
import { JournalModule } from './app/journal.module';

@Module({
  imports: [JournalModule],
})
export class AppModule {}
