const Role = function (sequelize, DataTypes) {
    const Role = sequelize.define('ref_role', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'ref_role',
        schema: 'pmpdb',
        timestamps: false
    });

    Role.findByRoleId = async roleId => {
        let Role = await Role.findAll({
            where: { id: roleId },
        });
        return Role;
    };

    return Role;
};

module.exports = Role;