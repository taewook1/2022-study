export const checkNew = (newTarget) => {
  if (!newTarget) {
    throw new Error("Please use a New keyword!")
  }
}

export const checkState = (data) => {
  if (!data) {
    throw new Error("Incorrect State!")
  }

  if (!Array.isArray(data)) {
    throw new Error("Incorrect State!")
  }
}

