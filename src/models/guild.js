const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class Group extends Sequelize.Model {
		static associate(db) {
			Group.belongsToMany(db.Person, { through: 'GroupPerson' });
		};
	}

	Group.init({
		title: {
			type: DataTypes.STRING   
        }
	}, {
		sequelize,
		modelName: 'Group'
	});

	return Group;
};
