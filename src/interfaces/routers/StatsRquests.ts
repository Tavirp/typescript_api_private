export interface IGetAllStatsBody {
    id: number;
    userId: number;
    tasksDone: number;
    tasksOpen: number;
    Points: number;
  }
  
  export interface IUpdateStatsBody {
    id: number;
    tasksDone: number;
    tasksOpen: number;
    Points: number;
  }
  
  export interface ICreateNewStatsBody {
    tasksDone: number;
    tasksOpen: number;
    Points: number;
    newUserId: number;
  }
  
  export interface IDeleteStatsBody {
    id: number;
  }
  