const group = function (sequelize, DataTypes) {
    const Group = sequelize.define('group', {
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
        tableName: 'ref_group',
        schema: 'pmpdb',
        timestamps: false
    });

    Group.findByGroupId = async groupId => {
        let group = await Group.findAll({
            where: { id: groupId },
        });
        return group;
    };

    return Group;
};

module.exports = group;