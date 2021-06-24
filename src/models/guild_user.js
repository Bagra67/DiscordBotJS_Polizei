const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class Guild_User extends Sequelize.Model {
		static associate(db) {
		};
	}

	Guild_User.init({
		is_mute: {type:DataTypes.BOOLEAN, defaultvalue: false},
        is_ban: {type:DataTypes.BOOLEAN, defaultvalue: false},
        is_kick: {type:DataTypes.BOOLEAN, defaultvalue: false},
        is_answerme: {type:DataTypes.BOOLEAN, defaultvalue: false},
        time_ban: {type:DataTypes.INTEGER, defaultvalue: 0},
        time_bute: {type:DataTypes.INTEGER, defaultvalue: 0},
	}, {
		sequelize,
		modelName: 'Guild_User'
	});

	return Guild_User;
};
