

class AssessmentMenu {

    constructor(assessment){
      
        //Organization
        this.organization = {};

        //Assessment object
        this.assessment = assessment;
        
        //It will store the current state of the filters
        //The domain is stored in assessment.regions, assessment.jobs,.. etc
        this.filters = {
            jobFunctions :  {},
            jobs :          {},
            skills :        {},
            skillAreas :    {},
            regions :       {},
            departments :   {},
            locations :     {},
            managers :      {}
        };

        this.init = function(){
            //1) Call backend to load list of organizations/assessment

            this.fillSelector("organizationSelector",  [{id:1,name:'Danone'},{id:2,name:'IBM'}], '--');

            this.fillSelector("assessmentSelector",  [{id:1,name:'Danone Q1'},{id:2,name:'Danone Q2'}],'--');
        }

        this.load = function(){ 

            //Get data from backend
            this.assessment.load();

            this.filters = {
               
                jobFunctions : this.assessment.jobFunctions,
                jobs : this.assessment.jobs,
                skills : this.assessment.skills,
                skillAreas : this.assessment.skillAreas,
               
                regions : this.assessment.regions,
                departments : this.assessment.departments,
                locations : this.assessment.locations,
                
                managers : this.assessment.managers
            };

            this.fillSelector("jobFunctionsSelector", this.filters.jobFunctions, 'none');
            this.fillSelector("jobsSelector", this.filters.jobs);
            this.fillSelector("skillsSelector", this.filters.skills);
            this.fillSelector("skillAreasSelector", this.filters.skillAreas);
            
            this.fillSelector("regionsSelector", this.filters.regions);
            this.fillSelector("departmentsSelector", this.filters.departments);
            this.fillSelector("locationsSelector", this.filters.locations);
            
            this.fillSelector("managersSelector", this.filters.managers);
        } 

        this.selectOrganization = function(){
           
            this.organization = {
                id: 1,
                name: 'Danone'
            }

            this.fillSelector("assessmentSelector",  [{id:1,name:'Danone Q1'},{id:2,name:'Danone Q2'}]);
        } 

        this.selectedAssessment = function(e){
            throw new Error('You have to implement the method!');
        } 

        this.clearAll = function(){
            // Empty all selectors and menues
            throw new Error('You have to implement the method!');
        } 

        this.clear = function(element){
            // Empty all selectors and menues
            throw new Error('You have to implement the method!');
        } 

        this.getFilters = function(){
            return this.filters;
        }

        this.fillSelector = function (selectorName, selectorData, defaultValue){

            var select = document.getElementById(selectorName); 

            var el = document.createElement("option");
            if (defaultValue!='none')
            {
                el.text = (defaultValue != null)? defaultValue: 'All';
                el.value = -1;
                el.defaultSelected = true;
                select.add(el);
            }
            for(var i = 0; i < selectorData.length; i++) {
                var opt = selectorData[i];
                var el = document.createElement("option");
            
                el.text = (typeof(opt)=='string')? opt : opt.name;
                el.value = (typeof(opt)=='string')? opt : opt.id;
                //define first element as selected if defaultValue=='none'
                el.defaultSelected = (defaultValue=='none' && i==0);

                select.add(el);  
            }
        }

        this.getSelectedJobFunction = function(){
            return Array.from(this.filters.jobFunctions)[0];
        }

    }

}