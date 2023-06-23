import { TaskManager } from './taskmanager.js'

class TaskQueryManager {
  constructor() {
    Promise
      .resolve(this.initdb())
      .then(res => console.log('done'))
      .catch(err => console.log(err))
      .finally(() => console.log('finished'))
  }

  /**
   * [initdb]
   * @param void
   * @return {Promise<Array>}
   */
  async initdb() {
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify([]));
    }

    this.db = JSON.parse(localStorage.getItem('tasks'));
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
   * @param {TaskManager} task
   * @return {Promise<TaskManager>}
   */
  async saveTask(taskManager) {
    this.db.push(taskManager.task);
    localStorage.setItem('tasks', JSON.stringify(this.db))
    return taskManager.task;
  }

  /**
   * [updateTask]
   * @param {Task} task
   * @param {TaskManager} taskManager
   * @return Promise<Object>
   */
  async updateTask(slug, taskManager) {
    let indexElement = this.db.findIndex(item => item.slug === slug)

    if (indexElement !== -1) {
      this.db[indexElement] = taskManager.task
    }

    localStorage.setItem('tasks', JSON.stringify(this.db))

    return taskManager.task
  }

  /**
   * [cleardb]
   * @param void
   * @return Promise
   */
  async cleardb() {
    localStorage.clear()
  }
}

export { TaskQueryManager };