interface PlanInterface {
  id: number;
  title: string;
  dayCapacity: number;
  tag: string;
}

interface CompanyInterface {
  id: number;
  title: string;
  plan: number;
}

interface UserInterface {
  id: number;
  name: string;
  verification: boolean;
  company: number;
}

export interface StorytellerInterface {
  storytellers: UserInterface[];
  companies: CompanyInterface[];
  plans: PlanInterface[];
}

const INITIAL_STATE: any = {
  storytellers: [],
  companies: [],
  plans: []
};

export default function storytellerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_STORYTELLERS":
      console.log("ow");
      return { storytellers: action.payload };

    default:
      return state;
  }
}
