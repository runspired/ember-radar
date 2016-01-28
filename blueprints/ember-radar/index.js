module.exports = {
  description: 'Installs ember-run-raf',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonToProject('ember-run-raf', '^1.0.5');
  }
};
