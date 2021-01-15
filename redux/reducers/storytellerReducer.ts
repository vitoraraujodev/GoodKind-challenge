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
  storytellers: {},
  companies: {},
  plans: {}
};

export default function storytellerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_STORYTELLERS":
      return {
        storytellers: action.payload.storytellers,
        companies: action.payload.companies,
        plans: action.payload.plans
      };

    case "SAVE_STORYTELLER":
      const storyteller = action.payload;

      state.storytellers[storyteller.id] = storyteller;

      return {
        ...state,
        storytellers: { ...state.storytellers }
      };

    case "VERIFY_STORYTELLER":
      const storytellerId = action.payload;

      state.storytellers[storytellerId].verification = true;

      return {
        ...state,
        storytellers: { ...state.storytellers }
      };

    case "DELETE_STORYTELLERS":
      const storytellersIds = action.payload;

      const newStorytellers = state.storytellers;

      storytellersIds.forEach(id => {
        if (newStorytellers[id]) delete newStorytellers[id];
      });

      return {
        ...state,
        storytellers: { ...newStorytellers }
      };
    default:
      return state;
  }
}
