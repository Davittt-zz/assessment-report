
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
    
            // console.log(this.regions)
            // console.log(this.departments)
            // console.log(this.locations)
            // console.log(this.skills)
            // console.log(this.skillAreas)
            // console.log(this.jobFunctions)
            // console.log(this.jobs)
            // console.log(this.managers)
        }

        //private
        this.usersByJobFunction = function(jobFunction){
            return this.users.filter(function(e){
                return e.job_function==jobFunction;
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
    }
}