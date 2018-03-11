const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite://podcast.db');

Podcast = sequelize.import(__dirname + '/podcast');
Episode = sequelize.import(__dirname + '/episode');

Podcast.hasMany(Episode);
Episode.belongsTo(Podcast);

module.exports.Podcast = Podcast;
module.exports.Episode = Episode;

module.exports.sequelize = sequelize;