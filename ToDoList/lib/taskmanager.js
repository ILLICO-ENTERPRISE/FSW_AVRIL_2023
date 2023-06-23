import { STATUS } from './constants.js';

class TaskManager {
  constructor(name, slug, priority) {
    this.task = {
      name: name,
      priority: priority,
      slug: this.makeSlug(slug),
      status: STATUS.CREATED,
    }
  }

  makeSlug(slug) {
    return slug
      .split(' ')
      .join('-');
  }

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

  async setStatus(status) {
    this.task.status = status
  }

  async startTask() {
    this.setStatus(STATUS.PENDING)
  }

  async endTask() {
    this.setStatus(STATUS.COMPLETED)
  }
}

export { TaskManager };