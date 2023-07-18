library(dplyr)
library(readr)

airports <- read_csv("airports.csv")
regions <- read_csv("regions.csv")
countries <- read_csv("countries.csv")
flights <- read_csv("flights.csv")

origin_flights <- flights |> select(iata_code = origin)
dest_flights <- flights |> select(iata_code = destination)

airports <- airports |>
  select(
    iata_code,
    municipality,
    iso_region,
    iso_country
  )


regions <- regions |> select(iso_region = code, region = name)
countries <- countries |> select(iso_country = code, country = name)


airports <- airports |>
  left_join(regions, by = "iso_region") |>
  left_join(countries, by = "iso_country") |>
  mutate(region = ifelse(iso_country == "US", region, country)) |>
  select(iata_code, city = municipality, region)

origin_flights <- origin_flights |>
  left_join(airports, by = "iata_code") |>
  select(origin = iata_code, origin_city = city, origin_region = region)

dest_flights <- dest_flights |>
  left_join(airports, by = "iata_code") |>
  select(dest = iata_code, dest_city = city, dest_region = region)


flights <- flights |>
  select(
    -origin,
    -origin_full_name,
    -destination,
    -destination_full_name
  ) |>
  cbind(origin_flights) |>
  cbind(dest_flights)

write_csv(flights, "flights_new.csv")
