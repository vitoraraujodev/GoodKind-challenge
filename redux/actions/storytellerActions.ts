export function setStorytellers(storytellers) {
  return {
    type: "SET_STORYTELLERS",
    payload: storytellers
  };
}

// Receives a list of storyteller's ids to delete
export function deleteStorytellers(storytellersIds) {
  return {
    type: "DELETE_STORYTELLERS",
    payload: storytellersIds
  };
}
