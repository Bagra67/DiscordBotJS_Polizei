const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class User extends Sequelize.Model {
		static associate(db) {
			User.belongsToMany(db.Guild, { through: db.Guild_Users, sourceKey: 'user_id', targetKey: 'guild_id' });

		}
	}

	User.init({
		user_id: {type:DataTypes.INTEGER, primaryKey:true},
		user_tag: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'User'
	});

	return User;

};
