const sprintGroup = function (sequelize, DataType) {
    const SprintGroup = sequelize.define('sprint_group', {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'sprint_group',
        schema: 'pmpdb',
        timestamps: false
    });

    SprintGroup.findBySprintGroupId = async sprintGroupId => {
        let sprintGroup = await SprintGroup.findAll({
            where: { id: sprintGroupId },
        });
        return sprintGroup;
    };

    return SprintGroup;
};

module.exports = sprintGroup;