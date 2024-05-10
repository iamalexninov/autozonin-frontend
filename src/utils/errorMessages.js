function errorInvalidComponent() {
  return "Invalid Component";
}

export function renderErrorMessage(type) {
  const messages = {
    invalid_component: errorInvalidComponent,
  };

  return messages[type];
}
