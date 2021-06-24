const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class Guild_User extends Sequelize.Model {
		static associate(db) {
		};
	}

	Guild_User.init({
		is_mute: DataTypes.BOOLEAN,
        is_ban: DataTypes.BOOLEAN,
        is_kick: DataTypes.BOOLEAN,
        is_answerme: DataTypes.BOOLEAN,
        time_ban: DataTypes.INTEGER,
        time_mute: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Guild_User'
	});

	return Guild_User;
};
