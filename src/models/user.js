const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class User extends Sequelize.Model {
		static associate(db) {
			User.belongsToMany(db.Guild, { through: 'GuildPerson' });

		}
	}

	User.init({
		user_id: DataTypes.INTEGER,
		user_tag: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'User'
	});

	return User;

};
