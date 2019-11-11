// C3 Chart
var chart = c3.generate({
    bindto: "#chart",
    data: 
    {
        columns: 
        [
            ['Date', 201911],
            ['2019', 1]
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


//JQuery to Toggle Chart hiding

$(document).ready(function(){
    $("#chartToggle").click(function(){
        $("#chart").slideToggle();
    })
});