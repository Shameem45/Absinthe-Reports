export class Task{
    task_id:number
    converge_id:string
    jobtype :string
    complexity:string
    scheduled_start_date:Date
    scheduled_end_date:Date
    STATUS:string
    publisher:string
    POCS:string
    JOB_COMMENTS:string
    SCHEDULED_HOURS:number
    total_no_of_functionalities:number
    FUNCTIONALITY_DETAILS:string
    EDIT_REASON:string
    ACTUAL_START_TIME:Date
    ACTUAL_END_TIME:Date
    actual_hours:number
    TOKEN_ID:string
    TEAM:string  
}


export class teamMemberData{
    empId:string;
    empFirstName:string;
    empLastName:string;
    empEmail:string;
    empDesignation:string;
    empContactNo:string;
}

export class productivityData{
    total_no_of_workingdays:number;
    total_no_of_presentdays:number;
    total_no_of_workedhours:number;
    team:string;
    empID:string;
    empName:string; 
}

// export interface convId{

// }

