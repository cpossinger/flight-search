create table flights (
  id char(6),
  created_at timestamp,
  updated_at timestamp,
  flight_identifier char(36),
  flt_num varchar(4),
  scheduled_origin_gate varchar(4),
  scheduled_destination_gate varchar(4),
  out_gmt timestamptz,
  in_gmt timestamptz,
  off_gmt timestamptz,
  on_gmt timestamptz,
  origin char(3),
  origin_city text,
  origin_region text,
  destination char(3),
  destination_city text,
  destination_region text
);

COPY flights FROM '/docker-entrypoint-initdb.d/flights_new.csv' DELIMITER ',' CSV HEADER;

CREATE EXTENSION pg_trgm;

