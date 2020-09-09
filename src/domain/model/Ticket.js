const camelCase = require('camelcase-keys');
const cuid = require('cuid');
const snakecaseKeys = require('snakecase-keys');

class Ticket {
  constructor(params) {
    this.id = params.id;
    this.externalId = params.externalId || cuid();
    this.description = params.description;
    this.submitterId = params.submitterId || 1;
    this.assigneeId = params.assigneeId;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }

  toDB() {
    return snakecaseKeys(this);
  }

  static fromDB(row) {
    return new Ticket(camelCase(row));
  }
}

module.exports = Ticket;
