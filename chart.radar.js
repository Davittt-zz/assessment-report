
class RadarChart extends Chart{

    constructor (){

        super();

        this.myConfig = {
            type: "radar",
            title: {
              text: ""
            },
            legend: {
              align: "center",
              'vertical-align': "bottom"
            },
            plot : {
              aspect : 'area',
              tooltip: {
                text: "%t: %v"
              },
              animation: {
                effect:3,
                sequence:1,
                speed:900
              }
            },
            scaleV : {
              values : '0:3:1',
              visible : true
            },
            scaleK : {
              values : '0:5:1',
              labels : ['1','2','3','4','5'],
              item : {
                fontColor : '#607D8B',
                backgroundColor : "white",
                borderColor : "#aeaeae",
                borderWidth : 1,
                padding : '5 10',
                borderRadius : 10
              },
              refLine : {
                lineColor : '#c10000'
              },
              tick : {
                lineColor : '#59869c',
                lineWidth : 2,
                lineStyle : 'dotted',
                size : 20
              },
              guide : {
                lineColor : "#607D8B",
                lineStyle : 'solid',
                alpha : 0.3,
                backgroundColor : "#c5c5c5 #718eb4"
              }
            },
            series: [] 
          };

        this.updateTitle = function(title){
            this.myConfig.title.text = title
        }

        this.updateLabels = function(labels){
            this.myConfig.scaleK.values = '0:' + (labels.length-1) + ':1';
            this.myConfig.scaleK.labels = labels;
        }

        this.updateSeries = function(series){
            this.myConfig.series = series
        }

    }
}