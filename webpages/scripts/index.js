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
    Plotly.d3.csv("Datasets/Covid19_MoHFW.csv",
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
    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        if (row["state_name"] =="Karnataka")
        {
            states['Karnataka'].x.push( row['extract_date'] );
            states['Karnataka'].active.push( row['active'] );
            states['Karnataka'].deaths.push( row['death'] );
        }
        else if(row["state_name"] =="Kerala")
        {
            states['Kerala'].x.push( row['extract_date'] );
            states['Kerala'].active.push( row['active'] );
            states['Kerala'].deaths.push( row['death'] );
        }
        else if(row["state_name"] =="Maharashtra")
        {
            states['Maharashtra'].x.push( row['extract_date'] );
            states['Maharashtra'].active.push( row['active'] );
            states['Maharashtra'].deaths.push( row['death'] );
        }
        else if(row["state_name"] =="Telangana")
        {
            states['Telangana'].x.push( row['extract_date'] );
            states['Telangana'].active.push( row['active'] );
            states['Telangana'].deaths.push( row['death'] );
        }
        else if(row["state_name"] =="Andhra Pradesh")
        {
            states['Andhra Pradesh'].x.push( row['extract_date'] );
            states['Andhra Pradesh'].active.push( row['active'] );
            states['Andhra Pradesh'].deaths.push( row['death'] );
        }
        else if(row["state_name"] =="Tamil Nadu")
        {
            states['Tamil Nadu'].x.push( row['extract_date'] );
            states['Tamil Nadu'].active.push( row['active'] );
            states['Tamil Nadu'].deaths.push( row['death'] );
        }
    }
    makeChartMoHFW(states);
}

function makeChartMoHFW(states){
    //var plotDiv = document.getElementById("plot");
    var traces_active = [{
        name: "Karnataka",
        x: states["Karnataka"].x,
        y: states["Karnataka"].active,
        mode: 'lines+markers',
        line: {
            color: states["Karnataka"].color
        }
    },
    {
        name: "Kerala",
        x: states["Kerala"].x, 
        y: states["Kerala"].active,
        mode: 'lines+markers',
        line: {
            color: states["Kerala"].color
        }
    },
    {
        name: "Maharashtra",
        x: states["Maharashtra"].x, 
        y: states["Maharashtra"].active,
        mode: 'lines+markers',
        line: {
            color: states["Maharashtra"].color
        }
    },
    {
        name: "Telangana",
        x: states["Telangana"].x, 
        y: states["Telangana"].active,
        mode: 'lines+markers',
        line: {
            color: states["Telangana"].color
        }
    },
    {
        name: "Andhra Pradesh",
        x: states["Andhra Pradesh"].x, 
        y: states["Andhra Pradesh"].active,
        mode: 'lines+markers',
        line: {
            color: states["Andhra Pradesh"].color
        }
    },
    {
        name: "Tamil Nadu",
        x: states["Tamil Nadu"].x, 
        y: states["Tamil Nadu"].active,
        mode: 'lines+markers',
        line: {
            color: states["Tamil Nadu"].color
        }
    }];
    var traces_deaths = [{
        name: "Karnataka",
        x: states["Karnataka"].x,
        y: states["Karnataka"].deaths,
        mode: 'lines+markers',
        line: {
            color: states["Karnataka"].color
        }
    },
    {
        name: "Kerala",
        x: states["Kerala"].x, 
        y: states["Kerala"].deaths,
        mode: 'lines+markers',
        line: {
            color: states["Kerala"].color
        }
    },
    {
        name: "Maharashtra",
        x: states["Maharashtra"].x, 
        y: states["Maharashtra"].deaths,
        mode: 'lines+markers',
        line: {
            color: states["Maharashtra"].color
        }
    },
    {
        name: "Telangana",
        x: states["Telangana"].x, 
        y: states["Telangana"].deaths,
        mode: 'lines+markers',
        line: {
            color: states["Telangana"].color
        }
    },
    {
        name: "Andhra Pradesh",
        x: states["Andhra Pradesh"].x, 
        y: states["Andhra Pradesh"].deaths,
        mode: 'lines+markers',
        line: {
            color: states["Andhra Pradesh"].color
        }
    },
    {
        name: "Tamil Nadu",
        x: states["Tamil Nadu"].x, 
        y: states["Tamil Nadu"].deaths,
        mode: 'lines+markers',
        line: {
            color: states["Tamil Nadu"].color
        }
    }];

    Plotly.newPlot('MoHFWActiveCases', traces_active, {title: 'India Active Cases'});
    Plotly.newPlot('MoHFWDeaths', traces_deaths, {title: 'India Deaths'});
};


/***************************************************************************/
/***************************************************************************/
function getCSVOurWorldInData() {
    Plotly.d3.csv("Datasets/Covid19_OWiD.csv",  //"https://covid.ourworldindata.org/data/owid-covid-data.csv",
        function(data) { processOWiDData(data) }
    );
};

function processOWiDData(allRows) {
    var countries = {
        'Brazil': {x:[],totalCases:[],totalDeaths:[],newCases:[],newDeaths:[],color:'rgb(99, 110, 250)'},
        'Canada': {x:[],totalCases:[],totalDeaths:[],newCases:[],newDeaths:[],color:'rgb(239, 85, 59)'},
        'India': {x:[],totalCases:[],totalDeaths:[],newCases:[],newDeaths:[],color:'rgb(0, 204, 150)'},
        'Mexico': {x:[],totalCases:[],totalDeaths:[],newCases:[],newDeaths:[],color:'rgb(171, 99, 250)'},
        'United States': {x:[],totalCases:[],totalDeaths:[],newCases:[],newDeaths:[],color:'rgb(255, 161, 90)'},
        'colorCases': 'rgb(99, 110, 250)',
        'colorDeaths': 'rgb(239, 85, 59)'
    }
    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        if (row['date'] >= '2020-03-25') {
            if (row["location"] =="India")
            {
                countries["India"].x.push( row['date'] );
                countries["India"].totalCases.push( row['total_cases'] );
                countries["India"].totalDeaths.push( row['total_deaths'] );
                countries["India"].newCases.push( row['new_cases'] );
                countries["India"].newDeaths.push( row['new_deaths'] );
            }
            else if(row["location"] =="Brazil")
            {
                countries["Brazil"].x.push( row['date'] );
                countries["Brazil"].totalCases.push( row['total_cases'] );
                countries["Brazil"].totalDeaths.push( row['total_deaths'] );
                countries["Brazil"].newCases.push( row['new_cases'] );
                countries["Brazil"].newDeaths.push( row['new_deaths'] );
            }
            else if(row["location"] =="Canada")
            {
                countries["Canada"].x.push( row['date'] );
                countries["Canada"].totalCases.push( row['total_cases'] );
                countries["Canada"].totalDeaths.push( row['total_deaths'] );
                countries["Canada"].newCases.push( row['new_cases'] );
                countries["Canada"].newDeaths.push( row['new_deaths'] );
            }
            else if(row["location"] =="Mexico")
            {
                countries["Mexico"].x.push( row['date'] );
                countries["Mexico"].totalCases.push( row['total_cases'] );
                countries["Mexico"].totalDeaths.push( row['total_deaths'] );
                countries["Mexico"].newCases.push( row['new_cases'] );
                countries["Mexico"].newDeaths.push( row['new_deaths'] );
            }
            else if(row["location"] =="United States")
            {
                countries["United States"].x.push( row['date'] );
                countries["United States"].totalCases.push( row['total_cases'] );
                countries["United States"].totalDeaths.push( row['total_deaths'] );
                countries["United States"].newCases.push( row['new_cases'] );
                countries["United States"].newDeaths.push( row['new_deaths'] );
            }
    }
    }
    makeChartOWiD(countries);
}

function makeChartOWiD(countries){
    //var plotDiv = document.getElementById("plot");
    var traces_total = [{
        name: "TotalCases",
        x: countries["India"].x,
        y: countries["India"].totalCases,
        mode: 'lines+markers',
        line: {
            color: countries.colorCases
        }
    },
    {
        name: "TotalDeaths",
        x: countries["India"].x,
        y: countries["India"].totalDeaths,
        mode: 'lines+markers',
        line: {
            color: countries.colorDeaths
        }
    }];
    var traces_new = [{
        name: "NewCases",
        x: countries["India"].x,
        y: countries["India"].newCases,
        mode: 'lines+markers',
        line: {
            color: countries.colorCases
        }
    },
    {
        name: "NewDeaths",
        x: countries["India"].x,
        y: countries["India"].newDeaths,
        mode: 'lines+markers',
        line: {
            color: countries.colorDeaths
        }
    }];
    var traces_log_TotalCases = [{
        name: "Brazil",
        x: countries["Brazil"].x,
        y: countries["Brazil"].totalCases,
        mode: 'lines+markers',
        line: {
            color: countries["Brazil"].color
        }
    },
    {
        name: "India",
        x: countries["India"].x,
        y: countries["India"].totalCases,
        mode: 'lines+markers',
        line: {
            color: countries["India"].color
        }
    },
    {
        name: "Mexico",
        x: countries["Mexico"].x,
        y: countries["Mexico"].totalCases,
        mode: 'lines+markers',
        line: {
            color: countries["Mexico"].color
        }
    },
    {
        name: "Canada",
        x: countries["Canada"].x,
        y: countries["Canada"].totalCases,
        mode: 'lines+markers',
        line: {
            color: countries["Canada"].color
        }
    },
    {
        name: "United States",
        x: countries["United States"].x,
        y: countries["United States"].totalCases,
        mode: 'lines+markers',
        line: {
            color: countries["United States"].color
        }
    }];
    var traces_log_TotalDeaths = [{
        name: "Brazil",
        x: countries["Brazil"].x,
        y: countries["Brazil"].totalDeaths,
        mode: 'lines+markers',
        line: {
            color: countries["Brazil"].color
        }
    },
    {
        name: "India",
        x: countries["India"].x,
        y: countries["India"].totalDeaths,
        mode: 'lines+markers',
        line: {
            color: countries["India"].color
        }
    },
    {
        name: "Mexico",
        x: countries["Mexico"].x,
        y: countries["Mexico"].totalDeaths,
        mode: 'lines+markers',
        line: {
            color: countries["Mexico"].color
        }
    },
    {
        name: "Canada",
        x: countries["Canada"].x,
        y: countries["Canada"].totalDeaths,
        mode: 'lines+markers',
        line: {
            color: countries["Canada"].color
        }
    },
    {
        name: "United States",
        x: countries["United States"].x,
        y: countries["United States"].totalDeaths,
        mode: 'lines+markers',
        line: {
            color: countries["United States"].color
        }
    }];

    Plotly.newPlot('OWiDIndiaTotal', traces_total, {title: 'India Total Cases and Deaths'});
    Plotly.newPlot('OWiDIndiaNew', traces_new, {title: 'India New Cases and Deaths'});
    Plotly.newPlot('OWiDWWTotalCases', traces_log_TotalCases, {title: 'WW Total Cases', yaxis: {type:'log',autorange:true}});
    Plotly.newPlot('OWiDWWTotalDeaths', traces_log_TotalDeaths, {title: 'WW Total Deaths', yaxis: {type:'log',autorange:true}});
};

getCSVMoHFW();
getCSVOurWorldInData();