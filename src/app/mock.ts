import { v4 as uuidv4 } from "uuid";

//Default note class
export class Note {
  name: string;
  category: string;
  content: string;
  status: string;
  id:string;
  dates: string[];
  created: string | Boolean;

  constructor(
    name: string,
    category: string,
    content: string,
    status: string,
    created: string | Boolean,
    id: string,
  ) {
    this.name = name;
    this.category = category;
    this.content = content;
    this.status = status;
    this.id = id;
    this.dates = this.getDates(content);
    this.created =
      created ||
      new Date().toLocaleDateString('en-GB', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
  }

  private getDates(string: string): string[] {
    const pattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    const matches = string.match(pattern);
    return matches || [];
  }

  setDates(string: string): void {
    this.dates = this.getDates(string);
  } 
}
//Data for initial population
const initialState = [{
    name: "Do push-ups",
    created: "21 Jun 2022",
    category: "Task",
    content: "And I really mean it!",
    status: "live",    
  },
  {
    name: "Came to mind",
    created: "22 Jun 2022",
    category: "Thought",
    content: "Do androids dream about electric ship?",
    status: "live",   
  },
  {
    name: "Dentist appointment",
    created: "23 Jun 2022",
    category: "Idea",
    content: "Should sign up for an appointment with dentist. 01/11/2023 through 07/11/2023 will be the best",
    status: "live",    
  },  
  {
    name: "Buy groceries",
    created: "01 Jul 2023",
    category: "Task",
    content: "Milk, eggs, bread, and fruits",
    status: "live",    
  },
  {
    name: "Read a book",
    created: "02 Jul 2023",
    category: "Task",
    content: "Finish reading 'The Great Gatsby'. 01/09/2023",
    status: "live",    
  },
  {
    name: "Plan vacation",
    created: "03 Jul 2023",
    category: "Idea",
    content: "Consider a trip to Europe in the summer. 10/08/2023 - 20/08/2023",
    status: "live",    
  },
  {
    name: "Exercise routine",
    created: "04 Jul 2023",
    category: "Task",
    content: "Go for a run every morning. 05/08/2023 - 31/08/2023",
    status: "live",    
  },
  {
    name: "Pay bills",
    created: "05 Jul 2023",
    category: "Task",
    content: "Electricity bill due 15/08/2023. Internet bill due 20/08/2023",
    status: "live",    
  },
  {
    name: "Complete project",
    created: "01 Jul 2023",
    category: "Task",
    content: "Finish the project by 31/08/2023",
    status: "archive",    
  },
];


export function mockData() {
  const result = initialState.map((item) => {
    const note = new Note(item.name, item.category, item.content, item.status, item.created, uuidv4())
    return { ...note };
  })
  return result;
}