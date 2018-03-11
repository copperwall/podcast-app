module.exports = function(sequelize, DataTypes) {
    return sequelize.define('episode', {
        title: {
            type: DataTypes.STRING
        },
        datePublished: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['title', 'podcastId']
            }
        ]
    });
};