import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JournalEntity } from './journal.entity';
import { Repository } from 'typeorm';
import { MessageDto } from './journal.dto';

@Injectable()
export class JournalService {
  constructor(
    @InjectRepository(JournalEntity)
    private journalRepository: Repository<JournalEntity>
  ) {}

  getData(): Promise<JournalEntity[]> {
    const user = this.journalRepository.find({
      order: { created_at: 'DESC' },
    });
    return user;
  }

  async postData(message: MessageDto): Promise<JournalEntity> {
    const { title, content } = message;

    const journal = new JournalEntity();
    journal.title = title;
    journal.content = content;
    console.log('fck this shit');
    return this.journalRepository.save(journal);
  }
}
