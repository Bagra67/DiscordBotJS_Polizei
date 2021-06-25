const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class Guild extends Sequelize.Model {
		static associate(db) {
			Guild.belongsToMany(db.User, { through: db.Guild_Users, sourceKey: 'guild_id', targetKey: 'user_id' });
		};
	}

	Guild.init({
		guild_id: {type: DataTypes.INTEGER, primaryKey: true},
        guild_name: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Guild'
	});

	return Guild;
};
