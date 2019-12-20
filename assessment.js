
class Assessment {

    constructor(){

        // { 'user_id': 1, 'name': 'user 1', 'region':'region 1', 'department':'departament 1'
        // , 'location':'location 1', 'skill': 'skill 1', 'skill_area':'skill area 1'
        // , 'job_function':'job function 1', 'job':'job 1'
        // , 'manager_id': 3, 'manager_name':'name manager' 'manager_value':2, 'hacket_value':2 }

        this.users = [{ 
        'user_id': 1
        , 'name': 'user 1'
        , 'region':'region 1'
        , 'department':'departament 1'
        , 'location':'location 1'
        , 'skill': 'skill 1'
        , 'skill_area':'skill area 1'
        , 'job_function':'job function 1'
        , 'job':'job 1'
        , 'manager_id': 2
        , 'manager_name':'user 2'
        , 'manager_value':2
        , 'hacket_value':2 
        , 'user_value': 1.6
    },{ 
        'user_id': 2
        , 'name': 'user 2'
        , 'region':'region 1'
        , 'department':'departament 1'
        , 'location':'location 1'
        , 'skill': 'skill 2'
        , 'skill_area':'skill area 2'
        , 'job_function':'job function 1'
        , 'job':'job 1'
        , 'manager_id': null
        , 'manager_name':null
        , 'manager_value':1.65
        , 'hacket_value':2 
        , 'user_value': 1.6
    },{ 
        'user_id': 3
        , 'name': 'user 3'
        , 'region':'region 2'
        , 'department':'departament 2'
        , 'location':'location 2'
        , 'skill': 'skill 3'
        , 'skill_area':'skill area 3'
        , 'job_function':'job function 1'
        , 'job':'job 4'
        , 'manager_id': 2
        , 'manager_name':'user 2'
        , 'manager_value': 1
        , 'hacket_value': 0.6
        , 'user_value': 2.6
    },{ 
        'user_id': 4
        , 'name': 'user 3'
        , 'region':'region 2'
        , 'department':'departament 2'
        , 'location':'location 2'
        , 'skill': 'skill 3'
        , 'skill_area':'skill area 4'
        , 'job_function':'job function 4'
        , 'job':'job 4'
        , 'manager_id': 2
        , 'manager_name':'user 2'
        , 'manager_value': 1.9
        , 'hacket_value': 2.6
        , 'user_value': 2.0
    },{ 
        'user_id': 5
        , 'name': 'user 3'
        , 'region':'region 2'
        , 'department':'departament 2'
        , 'location':'location 2'
        , 'skill': 'skill 3'
        , 'skill_area':'skill area 5'
        , 'job_function':'job function 4'
        , 'job':'job 4'
        , 'manager_id': 2
        , 'manager_name':'user 2'
        , 'manager_value': 1.4
        , 'hacket_value': 0.6
        , 'user_value': 2.6
        }
        ,{ 
            'user_id': 6
            , 'name': 'user 4'
            , 'region':'region 3'
            , 'department':'departament 3'
            , 'location':'location 3'
            , 'skill': 'skill 4'
            , 'skill_area':'skill area 3'
            , 'job_function':'job function 4'
            , 'job':'job 5'
            , 'manager_id': 2
            , 'manager_name':'user 2'
            , 'manager_value': 3
            , 'hacket_value': 2.6
            , 'user_value': 1.6
        } ,{ 
            'user_id': 7
            , 'name': 'user 5'
            , 'region':'region 3'
            , 'department':'departament 3'
            , 'location':'location 3'
            , 'skill': 'skill 5'
            , 'skill_area':'skill area 8'
            , 'job_function':'job function 4'
            , 'job':'job 6'
            , 'manager_id': 2
            , 'manager_name':'user 2'
            , 'manager_value': 3
            , 'hacket_value': 2.6
            , 'user_value': 1.6
        }
    ];
    
        this.regions = {};
        this.departments = {}   
        this.locations = {} 
        this.skills = {}    
        this.skillAreas = {} 
        this.jobFunctions = {}  
        this.jobs = {}  
        this.managers = {}   

        this.load = function(){
            
            let regionSet = new Set();
            let departmentSet = new Set();
            let locationSet = new Set();
            let skillSet = new Set();
            let skillAreaSet = new Set();
            let jobFunctionSet = new Set();
            let jobSet = new Set();
            //the last is a set of objects
            let managerSet = new Set();

            this.users.forEach(user => {

                //Maybe it would be usefull if we load a manager list.
                //Let's improve the data navigation

                regionSet.add(user.region);
                departmentSet.add(user.department);
                locationSet.add(user.location);
                skillSet.add(user.skill);
                skillAreaSet.add(user.skill_area);
                jobFunctionSet.add(user.job_function);
                jobSet.add(user.job);

                if (user.manager_id!=null){
                    managerSet.add({
                        'id': user.manager_id
                        , 'name':user.manager_name
                        }
                    );
                }
            });
        
            this.regions = Array.from(regionSet)
            this.departments = Array.from(departmentSet)
            this.locations = Array.from(locationSet)
            this.skills = Array.from(skillSet)
            this.skillAreas = Array.from(skillAreaSet)
            this.jobFunctions = Array.from(jobFunctionSet)
            this.jobs = Array.from(jobSet)
            this.managers = Array.from(managerSet)
    
        }

        //private
        this.usersByJobFunction = function(jobFunction){
            return this.users.filter(function(e){
                return e.job_function==jobFunction;
            })
        }

        //private
        this.usersBySkillAreas = function(skillAreas){
            return this.users.filter(function(e){
                return e.skill_area==skillAreas;
            })
        }

        //Returns the list of job functions and Hackett, Manager and User values
        this.getRadarSeries = function(jobFunction){

            let users = this.usersByJobFunction(jobFunction);

            let jobFunctionSeries = [];

            users.forEach(user =>{
                if (jobFunctionSeries[user.job_function]==null)
                {
                    jobFunctionSeries.push({
                        name: user.skill_area,
                        count: 1,
                        manager_value:  user.manager_value,
                        hacket_value: user.hacket_value,
                        user_value: user.user_value
                    });
                    }else{
                        jobFunctionSeries[user.job_function].count++;
                        jobFunctionSeries[user.job_function].hacket_value = user.hacket_value;
                        jobFunctionSeries[user.job_function].manager_value = user.manager_value;
                        jobFunctionSeries[user.job_function].user_value = user.user_value;
                    }
                });

            return jobFunctionSeries;
        }

        this.getBubbleSeries = function(assessmentFilters, bubbleCharType){

            //if bubbleCharType=='jobs'
            // group series by job
            //Bubble ('job', f(hackett,manager,user),  )
          
        //  let users = this.usersBySkillAreas(jobFunction);

            let rawSeries = [];
    
            this.users.forEach(user =>{
                let key = user.skill_area
                if (rawSeries[key]==null)
                {
                    rawSeries.push({
                        name: user.skill_area,
                        x : (user.manager_value + user.user_value)/2,
                        y : user.hacket_value,
                        count :  1,
                        type : 'bubble'                        
                    });
                    }else{
                        rawSeries[key].count++;
                        rawSeries[key].x = user.hacket_value;
                        rawSeries[key].y = user.manager_value;
                    }
                });

            let bubbleSeries = {
                series: [],
                maxY:100,
                minY:-100
            }

            rawSeries.forEach(element =>{
               
                bubbleSeries.series.push({
                    type: element.type,
                    values: [ [element.x/element.count,(((element.y/element.x)-1)/element.count)*100,element.count] ]
                })
            });

            return bubbleSeries;

            return {
                series: [
                {
                    type: 'bubble',
                    values: [
                        [1.92, 30.87, 27]
                    ],
                    text: "Analyst"
                },
                {
                    type: 'bubble',
                    values: [
                        [1.92, 0.87, 97]
                    ],
                    text: "Category Owner"
                },
                {
                    type: 'bubble',
                    values: [
                        [0.19, -15.95, 16]
                    ],
                    text: "Sourcing Manager"
                },
                {
                    type: 'bubble',
                    values: [
                        [1.59, 55.95, 120]
                    ],
                    text: "SRM Program Manager"
                },
                {
                    type: 'bubble',
                    values: [
                        [1.59, 5.95, 350]
                    ],
                    text: "Buyer, Level 1 ('Junior Buyer')"
                }], 
                maxY: 120,
                minY:-120
            }
        }
    }
}