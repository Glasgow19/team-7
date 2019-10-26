class UserQuries {
  constructor(db) {
    this.db = db
  }

  get(query = {}) {
    return this.db('users').where(query)
  }

  create(user) {
    return this.db('users').insert(user)
  }
}

module.exports = UserQuries
