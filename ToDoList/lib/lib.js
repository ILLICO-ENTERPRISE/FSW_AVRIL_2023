// DOC: https://developer.mozilla.org/fr/docs/Web/JavaScript

// Les données sont volatiles
// Quand on réactualise les données sont mis a zéro
// Utiliser le LOCAL STORAGE pour persister les données
const tasks = [];


// localStorage (5Mo) ??
// sessionStorage (5Mo) ??
// cookieStore (5Mo) ??
// Object en JS => {key: value}


// Create the ENUM
// It is just a Object
const STATUS = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CREATED: 'CREATED',
}

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
      status: status ?? STATUS.CREATED,
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
    this.setStatus(STATUS.PENDING)
  }

  // On est en cours
  // STATUS => PENDING
  async endTask() {
    this.setStatus(STATUS.COMPLETED)
  }
}


class TaskQueryManager {
  constructor() {
    this.initdb().then((db) => {
      this.db = db;
    }).catch((error) => {
      console.error(error);
    })
  }

  /**
   * [initdb]
   * @param void
   * @return {Promise<Array>}
  */
  async initdb() {
    if (!localStorage.getItem('tasks')) {
      let datas = []
      localStorage.setItem('tasks', datas);
    }

    return localStorage.getItem('tasks');
  }

  /**
   * [findAll]
   * @param void
   * @return {Promise<Array>}
  */
  async findAll() {
    return this.db;
  }

  /**
   * [findById]
   * @param {Number} index
   * @return {Promise<Task>}
  */
  async findById(index) {
    return this.db.find((item, index) => index === index);
  }

  /**
   * [findBySlug]
   * @param {String} slug
   * @return {Promise<Task>}
  */
  async findBySlug(slug) {
    return this.db.find(item => item.slug === slug);
  }

  /**
   * [findByStatus]
   * @param {String} status
   * @return {Promise<Task[]>}
  */
  async findByStatus(status) {
    return this.db.filter(item => item.status === status);
  }

  /**
   * [saveTask]
   * @param {Task} task
   * @return {Promise}
  */
  async saveTask(task) {
    this.db.push(task);
  }

  /**
   * [updateTask]
   * @param {Task} task
   * @param {Task} data
   * @return Promise<Array>
  */
  async updateTask(slug, data) {
    task = await this.db.findBySlug(slug);
    task = { ...data };
  }
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