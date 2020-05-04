// C3 Chart
var chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: [
            ['Date', 1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10, 11, 12],
            //       J, F, M, A, M, J, J, A, S, O, N, D
            ['2019', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 11],
            //       J, F, M, A, M, J, J, A, S, O, N, D
            ['2020', 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0]

        ],
        x: 'Date',
        labels: true,
        colors: {
            '2019': '#d79921', //Yellow
            '2020': '#458588', //Blue
        },
    },
    legend: {
        position: 'right'
    },
    zoom: {
        enabled: true
    },
    point: {
        r: 5
    },
});

// Custom Function Immitating JQuery to Toggle Chart hiding
function _(selector){return document.querySelectorAll(selector)}

_(document).ready(function(){
    _("#chartToggle").click(function(){
        _("#chart").slideToggle();
    })
});