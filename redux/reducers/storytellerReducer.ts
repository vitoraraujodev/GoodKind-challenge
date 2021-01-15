interface PlanInterface {
  id: number;
  title: string;
  dayCapacity: number;
  tag: string;
}

interface CompanyInterface {
  id: number;
  title: string;
  plan: PlanInterface;
}

interface UserInterface {
  id: number;
  name: string;
  verification: boolean;
  company: CompanyInterface;
}

export interface StorytellerInterface {
  storytellers: UserInterface[];
}

const INITIAL_STATE: any = {
  storytellers: []
};

export default function storytellerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_STORYTELLERS":
      return { storytellers: action.payload };

    default:
      return state;
  }
}
