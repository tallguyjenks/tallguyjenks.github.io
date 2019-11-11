// Chart
var chart = c3.generate({
    bindto: "#chart",
    data: 
    {
        columns: 
        [
            ['Date', 201901, 201902, 201903, 201904, 201905, 201906],
            ['2019', 30, 200, 100, 400, 150, 250]
        ],
        x: 'Date',
        labels: true,
        colors: 
        {
            '2019': '#d79921',
            // TODO put the rest of the gruvbox colors in here for additional years
        }, 
    },
    zoom: 
    {
        enabled: true
    },
    point: 
    {
        r: 5
    },
});