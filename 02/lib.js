const LIMIT_AGE = 18;

// L'approche FUNCTIONNELLE
const checkAge = (age) => {
  try {
    if (age >= LIMIT_AGE) {
      return 'Tu est Majeur'
    } else {
      return 'Tu es Mineur'
    }
  } catch (e) {
    throw new Error(e.message)
  }
}

// L'approche FUNCTIONNELLE
const addFiveYearAge = (age) => {
  try {
    return age + 5;
  } catch (e) {
    throw new Error(e.message)
  }
}