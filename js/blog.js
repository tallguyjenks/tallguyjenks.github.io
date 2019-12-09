// C3 Chart
var chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: [
            ['Date', 1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10, 11, 12],
            //       J, F, M, A, M, J, J, A, S, O, N, D
            ['2019', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
            //       J, F, M, A, M, J, J, A, S, O, N, D
            ['2020', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            
        ],
        x: 'Date',
        labels: true,
        colors: {
            '2019': '#d79921', //Yellow
            '2020': '#458588', //Blue
            // TODO put the rest of the gruvbox colors in here for additional years
        }, 
    },
    zoom: {
        enabled: true
    },
    point: {
        r: 5
    },
});

//JQuery to Toggle Chart hiding

$(document).ready(function(){
    $("#chartToggle").click(function(){
        $("#chart").slideToggle();
    })
});




