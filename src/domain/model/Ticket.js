const camelCase = require('camelcase-keys');

class Ticket {
  constructor(params) {
    this.id = params.id;
    this.externalId = params.externalId;
    this.description = params.description;
    this.submitterId = params.submitterId;
    this.assigneeId = params.assigneeId;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }

  static fromDB(row) {
    return new Ticket(camelCase(row));
  }
}

module.exports = Ticket;
