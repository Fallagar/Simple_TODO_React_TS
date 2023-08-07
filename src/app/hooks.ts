import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface Result {
    name: string;
    category: string;
    content: string;
}
//Change form fields depending on purpose
export const useForm = (): Result => {
    const data = useAppSelector((state: RootState) => state.notes);
  const idForEdit = useAppSelector((state: RootState) => state.formStatus.dataId)
  //If form marked for editing, current values of a note are placed in the form 
    const result: Result = {name: "", category: "Task", content: ""}
    switch (idForEdit) {
        case "-1":
            break;
        default:
            const search = data.find((element) => element.id === idForEdit)
            result.name = search?.name || ""
            result.category = search?.category || ""
            result.content = search?.content || ""            
    }
    return result;   
}


//Class for calculating summary
class Summary {
  idea: number;
  ideaLive: number;
  thought: number;
  thoughtLive: number;
  task: number;
  taskLive: number;

  constructor() {
    this.idea = 0;
    this.ideaLive = 0;
    this.thought = 0;
    this.thoughtLive = 0;
    this.task = 0;
    this.taskLive = 0;
  }

  setIdea(): void {
    this.idea++;
  }

  setIdeaLive(): void {
    this.idea++;
    this.ideaLive++;
  }

  setThought(): void {
    this.thought++;
  }

  setThoughtLive(): void {
    this.thought++;
    this.thoughtLive++;
  }

  setTask(): void {
    this.task++;
  }

  setTaskLive(): void {
    this.task++;
    this.taskLive++;
  }
}

//Hook for calculating summary
export const useSummary = (): Summary => {
  const data = useAppSelector((state: RootState) => state.notes);
  const SummaryResult = new Summary();
  data.forEach((item) => {
    if (item.category === "Idea") {
      if (item.status === "live") {
        SummaryResult.setIdeaLive();
      } else {
        SummaryResult.setIdea();
      }
    } else if (item.category === "Thought") {
      if (item.status === "live") {
        SummaryResult.setThoughtLive();
      } else {
        SummaryResult.setThought();
      }
    } else if (item.category === "Task") {
      if (item.status === "live") {
        SummaryResult.setTaskLive();
      } else {
        SummaryResult.setTask();
      }
    }
  });

  return SummaryResult;
};

//Filter data into categories "live" || "archived"
export const useFilteredData = (query: string) => {
    const data = useAppSelector((state: RootState) => state.notes)
    const filtered = data.filter((item) => item.status === query)              
    return filtered    
}

