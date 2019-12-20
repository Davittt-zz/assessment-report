
class Chart{

    constructor (){
    
        this.myConfig = {};
    
        this.render = function (){
            zingchart.render({ 
            id : 'myChart', 
            data : this.myConfig, 
            });
        };

        this.updateLabels = function() {
            throw new Error('You have to implement the method!');
        }
        
        this.updateSeries = function() {
            throw new Error('You have to implement the method!');
        }

    }

}