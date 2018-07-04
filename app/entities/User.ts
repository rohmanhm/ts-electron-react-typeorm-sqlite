import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string
}
