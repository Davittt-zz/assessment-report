
function onSelectorChange(e){
    
    let select = e.target

    let options = []

    //All Item
    if (select.options[0].selected){
        options = Array.from(select.options)
            .filter(option => option.defaultSelected==false)
            .map(option => option.value);
    }else{
        options = Array.from(select.options)
            .filter(option => option.selected)
            .map(option => option.value);
    }

    if (select.name == 'organization')  {
        menu.selectOrganization();
    } else if  (select.name == 'assessment') {
        menu.selectedAssessment(1);
    }
    else {
          menu.filters[select.name] = options;
    }

    printChart();
}

function onTabSelect(e){

    //Set Tab active
    document.getElementById("radar-chart").classList.remove('active');
    document.getElementById("bubbles-chart").classList.remove('active');
    document.getElementById("table-chart").classList.remove('active');
    
    e.target.classList.add("active")

    currentChart = e.target.id
        
    printChart();
}

function printBubbleChart(){

    //Get filter selections
    let assessmentFilters = menu.getFilters();

    let bubbleCharType = getSelectedItems("bubble-chart-type");

    series = assessment.getBubbleSeries(assessmentFilters, bubbleCharType);

    let chart = new BubblesChart();

    chart.updateSeries(series);

    chart.render();
}

function printChart(){
    
    if (currentChart=='radar-chart') printRadarChart();
    else if (currentChart=='bubbles-chart') printBubbleChart();
    else if (currentChart=='table-chart') printTableChart();
}

function printRadarChart(){

    //selected job function    
    let selectedJobFunction = menu.getSelectedJobFunction();

    //Get the list of Job Functions values related to a particular selectedJobFunction
    let jobFunctionValues = assessment.getRadarSeries(selectedJobFunction);

    let chart = new RadarChart();

    let labels = [];
    let manager_serie = { values : [],  text:'' };
    let user_serie = { values : [],  text:'' };
    let hackett_serie = { values : [], text:''};

    jobFunctionValues.forEach (element=>{

        hackett_serie.values.push(element.hacket_value/element.count);
        hackett_serie.text = 'Hackett';

        manager_serie.values.push(element.manager_value/element.count);
        manager_serie.text = 'Manager';
        
        user_serie.values.push(element.user_value/element.count);
        user_serie.text = 'User';

        labels.push(element["name"]);
    });

    chart.updateTitle("job function 1"); 

    chart.updateLabels(labels); 

    chart.updateSeries([hackett_serie,manager_serie,user_serie])

    chart.render();
}

let currentChart = 'radar-chart'
let assessment = new Assessment();
let menu = new AssessmentMenu(assessment);
menu.init();
menu.load();



