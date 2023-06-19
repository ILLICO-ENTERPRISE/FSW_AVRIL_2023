// DOC: https://developer.mozilla.org/fr/docs/Web/JavaScript

// Les données sont volatiles
// Quand on réactualise les données sont mis a zéro
// Utiliser le LOCAL STORAGE pour persister les données
const tasks = [];


// localStorage (5Mo) ??
// sessionStorage (5Mo) ??
// cookieStore (5Mo) ??
// Object en JS => {key: value}


// SINGLE RESPONSIBILITY
// PATTERN SOLID
// S => SINGLE RESPONSIBILITY
// O => OPEN/CLOSE
// I => DEPENDENCY INVERSION
class TaskManager {
  // CONSTRUCTEUR
  // Etape d'initialisation => __init__ en PYTHON
  // This => self en PYTHON
  constructor(name, slug, priority, status) {
    // Un ATTRIBUT de la classe
    this.task = {
      name: name,
      slug: this.makeSlug(slug),
      priority: priority,
      status: status,
    }
  }

  makeSlug() {
    let splits = this.slug.split(' ');
    return splits.join('-');
  }

  // OOP ( GETTER / SETTER )
  // GETTER RETURN toujours une valeur
  // SETTER modifie une valeur d'un attribut de ma classe
  // Un GETTER retourne toujours une VALEUR
  // NB: Une fonction d'une classe: METHODE
  async getName() {
    return this.task.name
  }

  async getSlug() {
    return this.task.slug
  }

  async getPriority() {
    return this.task.priority
  }

  async getStatus() {
    return this.task.status
  }

  // SETTER de STATUS
  async setStatus(status) {
    this.task.status = status
  }

  // On est en cours
  // STATUS => PENDING
  async startTask() {
    this.setStatus('PENDING')
  }

  // On est en cours
  // STATUS => PENDING
  async endTask() {
    this.setStatus('COMPLETED')
  }
}


// SINGLE RESPONSIBILITY
// INJECTION DE DEPENDANCE
class PersistData {
  /**
   * @task {TaskManager}
  */
  constructor(task) {
    this.saveTask(task)
  }

  async saveTask(task) {
    const db = localStorage.getItem('tasks')

    if (!db) {
      let datas = []
      datas.push(task)
      localStorage.setItem('tasks', datas);
    } else {
      let datas = localStorage.getItem('tasks')
      datas.push(task)
    }
  }
}

class TaskQueryManager {
  constructor() {
    this.db = localStorage.getItem('tasks')
  }

  async findTask() {}
}


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