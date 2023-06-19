// DOC: https://developer.mozilla.org/fr/docs/Web/JavaScript

const tasks = [];

/**
 * [seeTasks]
 * @return Promise<Array>
 */
const seeTasks = async () => {
  return tasks;
}

/**
 * [makeSlug]
 * @param {String} slug
 * @return Promise<*>
 */
const makeSlug = async (slug) => {
  let splits = slug.split(' ');
  return splits.join('-');
}

/**
 * [addTask]
 * @param {String} task
 * @param {String} slug
 * @param {Number} priority
 * @return Promise<*>
 */
const addTask = async (task, slug, priority, status) => {
  tasks.push({
    name: task,
    slug: await makeSlug(slug),
    status: status,
    priority: priority,
  });
}

/**
 * [findTask]
 * @param {String} slug
 * @return Promise<*>
 */
const findTask = async (slug) => {
  return tasks.find(item => item.slug === slug);
}

/**
 * [findTask]
 * @param {String} slug
 * @return Promise<Boolean>
 */
const removeTask = async (slug) => {
  let element = findTask(slug);

  if (!element) return false;

  let index = tasks.indexOf(element);
  tasks.remove(element);
  return true;
}

/**
 * [sortByPriority]
 * Tri Par Insertion (ALGO)
 * https://fr.wikipedia.org/wiki/Tri_par_insertion
 * @return Promise<Array>
 */
const sortByPriority = async (key) => {
  return sortByKey(tasks, key);
}

/**
 * [sortByKey]
 * @return {Array}
 */
const sortByKey = (array, key) => {
  return array.sort((a, b) => {
    var x = a[key];
    var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}