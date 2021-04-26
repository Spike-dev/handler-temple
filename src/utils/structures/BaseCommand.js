module.exports = class BaseCommand {
  constructor(name, category, aliases, description, subcomands, permissions) {
    this.name = name;
    this.category = category;
    this.aliases = aliases;
    this.description = description;
    this.subcomands = subcomands;
    this.permissions = permissions;
  }
};
