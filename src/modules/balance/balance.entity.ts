import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: string;

  @Column()
  locationId: string;

  @Column("float")
  availableDays: number;

  @Column({ type: "datetime", nullable: true })
  lastSyncedAt: Date;
}
