module.exports = {
  description: 'Installs ember-run-raf',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject(
      [
        { name: 'ember-run-raf', version: '^1.0.5' },
        { name: 'ember-tweenlite', version: '^1.0.1' }
      ]);
  }
};
