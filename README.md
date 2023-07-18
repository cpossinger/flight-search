<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Delta Flight Search</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li> <a href="#about-the-project">About The Project</a> </li>
    <li> <a href="#prerequisites">Prerequisites</a> </li>
    <li> <a href="#build-and-run">Build and Run</a> </li> 
    <li> <a href="#contact">Contact</a> </li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

* Frontend: &nbsp;&nbsp;    [![Angular][Angular.io]][Angular-url]  [![Nginx][Nginx]][Nginx-url]
  - Custom CSS Soho Light theme
  - Custom favicon :)

  - select-station Component 
    - Used PrimeNG AutoComplete Component 
    - Ability to search flights by origin/destination IATA code, city, or region with fuzzy search suggestions
    - Input must match a suggested option

  - list-flights Component
    - Used PrimeNG DataView Component 
    - Shows relevant information for each matching flight
    - All flight times are in the GMT-5 timezone

* Backend: &nbsp;&nbsp;  [![NestJS][NestJS]][NestJS-url] [![NodeJS][Node.js]][Node.js-url]
  - /find-flights: 
    - Query the postgresql flights table and return an array of objects that match the origin and destination url query parameters

  - /suggest-station:
    - Fuzzy search of the orign/destination station IATA code, city, and region on the postgresql flights table using the searchStr url query parameter
    - Sort the results by their similarity score  
    - Remove duplicate objects
    - Convert each object to a formatted string
    - Supply the resulting array of strings to the AutoComplete options 

* Database:  &nbsp;&nbsp; [![Postgres][Postgres]][Postgres-url]
  - flights_new.csv
    - Created using join_airport_data.R
    - Joins open source data from [OurAirports](https://ourairports.com/data/) to add the origin/destination station's city and region to the original flights.csv
    
  - Table: flights
    - Copied from flights_new.csv in /data
    - Station in the US: region is the US state 
    - Station outside the US: region is the country 

  
<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Prerequisites

* Docker
* Docker Compose

### Build and Run

1. Clone the repo
   ```sh
   git clone https://github.com/cpossinger/flight-search.git
   ```

2. Make sure ports 80, 3000, and 5432 are free 

3. Build and Run
   ```sh
    cd flight-search
    docker compose up --build
   ```

4. Go to http://localhost:80 in your browser

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Camden Possinger: cposs2000@gmail.com

[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/camden-possinger-82780b1a1/
[Angular.io]: https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[NestJS]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[NestJS-url]: https://nestjs.com/
[Postgres]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]:https://nodejs.org/en
[Nginx]: https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white
[Nginx-url]: https://www.nginx.com/


