export function setStorytellers(storytellers) {
  return {
    type: "SET_STORYTELLERS",
    payload: storytellers
  };
}

export function saveStoryteller(storyteller) {
  return {
    type: "SAVE_STORYTELLER",
    payload: storyteller
  };
}

export function verifyStoryteller(storytellerId) {
  return {
    type: "VERIFY_STORYTELLER",
    payload: storytellerId
  };
}

// Receives a list of storyteller's ids to delete
export function deleteStorytellers(storytellersIds) {
  return {
    type: "DELETE_STORYTELLERS",
    payload: storytellersIds
  };
}
