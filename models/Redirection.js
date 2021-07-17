module.exports = (sequelize, DataTypes) => {
	const Redirection = sequelize.define('redirections', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		fromUrl: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		toUrl: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	},
		{
			tableName: 'redirections',
		});
	return Redirection;
};
