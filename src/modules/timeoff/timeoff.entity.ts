import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum Status {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
}

@Entity()
export class TimeOff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: string;

  @Column()
  locationId: string;

  @Column()
  totalDays: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ type: "text" })
  status: Status;
}
