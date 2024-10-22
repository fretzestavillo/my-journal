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
    const user = this.journalRepository.find();
    return user;
  }

  async postData(message: MessageDto): Promise<JournalEntity> {
    const { title, content } = message;
    const now = new Date();
    const currentDateString = now.toLocaleDateString();

    const userLast = await this.journalRepository.find({
      order: { created_at: 'DESC' },
      take: 1,
    });

    const dateFromDb = userLast[0].created_at;
    const newDate = new Date(dateFromDb);
    const fromDb = newDate.toLocaleDateString();

    if (currentDateString === fromDb) {
      userLast[0].content += `<p>${content}</p>`;
      return this.journalRepository.save(userLast[0]);
    } else {
      const user = this.journalRepository.create({
        title,
        content,
      });
      return this.journalRepository.save(user);
    }
  }
}
