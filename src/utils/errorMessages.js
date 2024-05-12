function errorInvalidComponent() {
  return "Invalid Component";
}

export function renderErrorMessage(type) {
  const messages = {
    invalid_component: errorInvalidComponent,
  };

  // if(!component) {
  //   return alert(messages[type])
  // }
  return messages[type];
}
