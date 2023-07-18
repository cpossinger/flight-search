import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'flights' })
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;

  @Column("text")
  flight_identifier : string;

  @Column("varchar", {length: 4})
  flt_num: string;

  @Column("varchar", {length: 4})
  scheduled_origin_gate: string;

  @Column("varchar", {length: 4})
  scheduled_destination_gate: string;

  @Column("timestamptz")
  out_gmt: Date;

  @Column("timestamptz")
  in_gmt: Date;

  @Column("timestamptz")
  off_gmt: Date;

  @Column("timestamptz")
  on_gmt: Date;

  @Column("char",{length: 3})
  origin: string;

  @Column("text")
  origin_city: string;

  @Column("text")
  origin_region: string;

  @Column("char",{length: 3})
  destination: string;

  @Column("text")
  destination_city: string;

  @Column("text")
  destination_region: string;
}


