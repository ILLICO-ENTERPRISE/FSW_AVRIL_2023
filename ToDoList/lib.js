// DOC: https://developer.mozilla.org/fr/docs/Web/JavaScript

const tasks = [];

/**
 * [addTask]
 * @param {String} task
 * @param {Number} priority
 * @return void
 */
const addTask = async (task, index, priority) => {
  try {
    tasks.push({
      name: task,
      index: index,
      priority: priority, 
    });
  } catch (e) {
    throw new Error(e)
  }
}

/**
 * [findTask]
 * @param {Number} index
 * @return task
 */
const findTask = async (index) => {
  try {
    return tasks.find(item => item.index === index);
  } catch (e) {
    throw new Error(e)
  }
}

/**
 * [findTask]
 * @param {Number} index
 * @return void
 */
const removeTask = async (index) => {
  try {
    let element = findTask(index);

    if (!element) {
      return false;
    }

    tasks.remove(element);
    return true;

  } catch (e) {
    throw new Error(e)
  }
}

/**
 * [findTask]
 * @return {Array}
 */
const sortByPriority = async () => {
  try {
    return tasks.map((task) => {
      // ?????
    })
  } catch (e) {
    throw new Error(e)
  }
}