// C3 Chart
var chart = c3.generate({
    bindto: "#chart",
    data: 
    {
        columns: 
        [
            ['Date', 201911, 201912],
            ['2019', 1,1],
            
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

// TODO long term goal is to have a chart tool tip for each point/month and have a listing of post titles on hover


//JQuery to Toggle Chart hiding

$(document).ready(function(){
    $("#chartToggle").click(function(){
        $("#chart").slideToggle();
    })
});




