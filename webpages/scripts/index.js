/*Plotly.d3.csv("Datasets/Covid19_MoHFW.csv",
    function(data){ processData(data) } 
);

TESTER = document.getElementById('tester');
	Plotly.newPlot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
    margin: { t: 0 } } );
*/  

function getCSVMoHFW() {
    Plotly.d3.csv("Datasets/Filtered_Covid19_MoHFW.csv",
        function(data){ processMoHFWData(data) } 
    );
};

function processMoHFWData(allRows) {
    var states = {
        'Karnataka': {x:[],active:[],deaths:[],color:'rgb(239, 85, 59)'},
        'Kerala': {x:[],active:[],deaths:[],color:'rgb(0, 204, 150)'},
        'Maharashtra': {x:[],active:[],deaths:[],color:'rgb(171, 99, 250)'},
        'Telangana': {x:[],active:[],deaths:[],color:'rgb(25, 211, 243)'},
        'Andhra Pradesh': {x:[],active:[],deaths:[],color:'rgb(99, 110, 250)'},
        'Tamil Nadu': {x:[],active:[],deaths:[],color:'rgb(255, 161, 90)'},
    }

    function pushRow(state_name,row)
    {
        states[state_name].x.push( row['extract_date'] );
        states[state_name].active.push( row['active'] );
        states[state_name].deaths.push( row['death'] );
    }

    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        state_names = Object.keys(states)
        for (var j=0; j<state_names.length; j++){
            if (row["state_name"] == state_names[j]) {
                pushRow(state_names[j],row)
            }
        }
    }
    makeChartMoHFW(states);
}

function makeChartMoHFW(states){
    //var plotDiv = document.getElementById("plot");
    state_names = Object.keys(states)
    var traces_active =[]
    state_names.forEach(state => {
        traces_active.push({
            name: state,
            x: states[state].x,
            y: states[state].active,
            mode:"lines+markers",
            line: {
                color: states[state].color
            }
        })
    });
    
    var traces_deaths = []
    state_names.forEach(state => {
        traces_deaths.push({
            name: state,
            x: states[state].x,
            y: states[state].deaths,
            mode:"lines+markers",
            line: {
                color: states[state].color
            }
        })
    });
    
    Plotly.newPlot('MoHFWActiveCases', traces_active, {title: 'India Active Cases'});
    Plotly.newPlot('MoHFWDeaths', traces_deaths, {title: 'India Deaths'});
};


/***************************************************************************/
/***************************************************************************/
function getCSVOurWorldInData() {
    Plotly.d3.csv("Datasets/Filtered_Covid19_OWiD.csv",  //"https://covid.ourworldindata.org/data/owid-covid-data.csv",
        function(data) { processOWiDData(data) }
    );
};

function processOWiDData(allRows) {
    var countries = {
        'Brazil': {x:[],totalCases:[],totalDeaths:[],newCases:[],newDeaths:[],color:'rgb(99, 110, 250)'},
        'Canada': {x:[],totalCases:[],totalDeaths:[],newCases:[],newDeaths:[],color:'rgb(239, 85, 59)'},
        'India': {x:[],totalCases:[],totalDeaths:[],newCases:[],newDeaths:[],color:'rgb(0, 204, 150)'},
        'Mexico': {x:[],totalCases:[],totalDeaths:[],newCases:[],newDeaths:[],color:'rgb(171, 99, 250)'},
        'United States': {x:[],totalCases:[],totalDeaths:[],newCases:[],newDeaths:[],color:'rgb(255, 161, 90)'}
    }

    function pushRow(country,row){
        countries[country].x.push( row['date'] );
        countries[country].totalCases.push( row['total_cases'] );
        countries[country].totalDeaths.push( row['total_deaths'] );
        countries[country].newCases.push( row['new_cases'] );
        countries[country].newDeaths.push( row['new_deaths'] );
    }
    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        if (row['date'] >= '2020-03-25') {
            country_list = Object.keys(countries)
            for (var j=0; j< country_list.length; j++){
                if (row["location"] ==country_list[j]){
                    pushRow(country_list[j],row)
                }
            }
        }
    }
    makeChartOWiD(countries);
}

function makeChartOWiD(countries){
    //var plotDiv = document.getElementById("plot");
    var colors = {
        'colorCases': 'rgb(99, 110, 250)',
        'colorDeaths': 'rgb(239, 85, 59)'
    }
    var country_to_track = "India"

    var traces_total = [{
        name: "TotalCases",
        x: countries[country_to_track].x,
        y: countries[country_to_track].totalCases,
        mode: 'lines+markers',
        line: {
            color: colors.colorCases
        }
    },
    {
        name: "TotalDeaths",
        x: countries[country_to_track].x,
        y: countries[country_to_track].totalDeaths,
        mode: 'lines+markers',
        line: {
            color: colors.colorDeaths
        }
    }];

    var traces_new = [{
        name: "NewCases",
        x: countries[country_to_track].x,
        y: countries[country_to_track].newCases,
        mode: 'lines+markers',
        line: {
            color: colors.colorCases
        }
    },
    {
        name: "NewDeaths",
        x: countries[country_to_track].x,
        y: countries[country_to_track].newDeaths,
        mode: 'lines+markers',
        line: {
            color: colors.colorDeaths
        }
    }];

    country_list = Object.keys(countries)
    var traces_log_TotalCases = []
    country_list.forEach(country => {
        traces_log_TotalCases.push({
            name: country,
            x: countries[country].x,
            y: countries[country].totalCases,
            mode: 'lines+markers',
            line: {
                color: countries[country].color
            }
        })
    });

    var traces_log_TotalDeaths = []
    country_list.forEach(country => {
        traces_log_TotalDeaths.push({
            name: country,
            x: countries[country].x,
            y: countries[country].totalDeaths,
            mode: 'lines+markers',
            line: {
                color: countries[country].color
            }
        })
    });

    Plotly.newPlot('OWiDIndiaTotal', traces_total, {title: 'India Total Cases and Deaths'});
    Plotly.newPlot('OWiDIndiaNew', traces_new, {title: 'India New Cases and Deaths'});
    Plotly.newPlot('OWiDWWTotalCases', traces_log_TotalCases, {title: 'WW Total Cases', yaxis: {type:'log',autorange:true}});
    Plotly.newPlot('OWiDWWTotalDeaths', traces_log_TotalDeaths, {title: 'WW Total Deaths', yaxis: {type:'log',autorange:true}});
};

getCSVMoHFW();
getCSVOurWorldInData();
