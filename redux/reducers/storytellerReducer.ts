export interface StorytellerInterface {
  storytellers: [
    {
      id: number;
      user: {
        id: number;
        name: string;
        verification: boolean;
      };
      plan: {
        id: number;
        title: string;
        dayCapacity: number;
        tag: string;
      };
    }
  ];
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
