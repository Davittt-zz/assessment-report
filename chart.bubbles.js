
class BubbleSerie {
    constructor(){

        this.x =  0 
        this.y = 0
        this.s = 0
        this.type = 'bubble'
        this.text = ''
        this.count = 0

        this.toValue = function (){
            return {
                type: this.type,
                values: [
                    [1.92, 30.87, 27]
                ],
                text: "Analyst"
            }
        }
    }
}

class BubblesChart extends Chart{

    constructor (){

        super();

        this.myConfig  = {
    
            graphset: [
                {
                    type: 'mixed',
                    title: {
                        text: 'Competency scores (x-axis) and gap from Hackett (y-axis)'
                    },
                    legend :{
                        x: "80%",
                        y: "60%",
                        draggable: true, //automatically adds header
                        'drag-handler': "header", //"header" (default) or "icon"
                        'minimize': true,
                        'icon': {
                            'line-color': "black"
                        },
                    },
                    plot: { 
                        'legend-item': {
                            'font-family': "Georgia",
                            'font-size': "8"
                        }  
                    },
                    markers: [],
                    scaleX: {
                        values: '0:3:0.5',
                        guide: {
                            visible: true
                        },
                        refValue: 5,
                        refLine: {
                            visible: true,
                            lineWidth: 3,
                            lineColor: '#424242',
                            lineStyle : 'dotted'
                        }
                    },
                    scaleY: {
                        values: '-100:100:5',
                        guide: {
                            visible: true
                        },
                        refValue: 0,
                        refLine: {
                            visible: true,
                            lineWidth: 2,
                            lineColor: '#424242',
                            lineStyle : 'dotted'
                        }
                    },
                    "labels":[
                    {
                        "x":"2%",
                        "y":"2%",
                        "text":"Recognition",
                        "padding":'5 10',
                        "backgroundColor":"white",
                        "font-color":"#607D8B",
                        "font-size":"14",
                        "borderWidth":1,
                        "borderRadius" : 10,
                        "borderColor" : "#aeaeae", 
                        "calloutPosition":"bottom"	 
                    },
                    {
                        "x":"2%",
                        "y":"92%",
                        "text":"Remediation",
                        "padding":'5 10',
                        "backgroundColor":"white",
                        "font-color":"#607D8B",
                        "font-size":"14",
                        "borderWidth":1,
                        "borderRadius" : 10,
                        "borderColor" : "#aeaeae", 
                        "calloutPosition":"bottom"	 
                    },
                    {
                        "x":"87%",
                        "y":"2%",
                        "text":"Retention",
                        "padding":'5 10',
                        "backgroundColor":"white",
                        "font-color":"#607D8B",
                        "font-size":"14", 
                        "borderWidth":1,
                        "borderRadius" : 10,
                        "borderColor" : "#aeaeae", 
                        "calloutPosition":"bottom"	 
                    },
                    {
                        "x":"85%",
                        "y":"92%",
                        "text":"Realignment",
                        "padding":'5 10',
                        "backgroundColor":"white",
                        "font-color":"#607D8B",
                        "font-size":"14",
                        "borderWidth":1,
                        "borderRadius" : 10,
                        "borderColor" : "#aeaeae", 
                        "calloutPosition":"bottom"	 
                    }
                ],
                series: [ ] 
            }]
        };

        this.updateTitle = function(title){
            this.myConfig.graphset.title.text = title
        }

        this.updateSeries = function(data){

            this.myConfig.graphset[0].scaleY.values = data.minY + ':' + data.maxY +  ':5';

            this.myConfig.graphset[0].series = [{
                type: "area",
                values: [
                    [0,data.maxY]
                    ,[0.5,data.maxY]
                    ,[1,data.maxY]
                    ,[1.5,data.maxY]
                    ,[1.5,data.minY]
                    ,[2,data.minY]
                    ,[2.5,data.minY]
                    ,[3,data.minY] ],
                'contour-on-top': false,
                text: "Area Chart",
                lineWidth: 0,
                backgroundColor: '#d3d3d3',
                marker: {
                    visible: false,
                },
                'legend-item': {
                    visible: false
                }
            }];

            //Attach series
            Array.prototype.push.apply(this.myConfig.graphset[0].series,data.series);
        }

    }
}