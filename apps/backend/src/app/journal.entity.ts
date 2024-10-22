import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JournalEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({
    nullable: true,
  })
  date: string;
}
