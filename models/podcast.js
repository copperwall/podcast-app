module.exports = function(sequelize, DataTypes) {
    return sequelize.define('podcast', {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['title', 'author']
            }
        ]
    });
};