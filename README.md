# RPiWebsite

### Why
I wanted a simple graph that showed key stats relevant to me.
This site gives me a simple consistent view of cases in:
* Indian states 
* India total
* WW stats in countries I'm tracking

### How
Started out as html extracts of two Jupyter notebooks (available under webpages/). I collated the main charts first as iframes and then as js charts (using plotly.js).

Crontab extracts data every 4 hours and creates the backend csv (Our World in Data provides a csv. I used that for MoHFW data as well)
Note: MoHFW changed the structure of their website on 2020-07-28. The data was in a pre-loaded HTML table. They changed it to a json on 28th. Missing data for one day on account of that.

Hosted on nginx webserver running on a Raspberry Pi model 3B+.

### Sources:
Ministry of Health and Family Welfare: https://www.mohfw.gov.in/

Our World in Data: https://ourworldindata.org/coronavirus
