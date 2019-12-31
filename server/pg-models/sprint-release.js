const sprintRelease = function (sequelize, DataType) {
    const SprintRelease = sequelize.define('sprint_release', {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: true,
            unique: true
        },
        date: {
            type: DataType.DATE,
            allowNull: true
        },
        start_date: {
            type: DataType.DATE,
            allowNull: true
        }
    }, {
        tableName: 'sprint_release',
        schema: 'pmpdb',
        timestamps: false
    });

    SprintRelease.findBySprintReleaseId = async sprintReleaseId => {
        let sprintRelease = await SprintRelease.findAll({
            where: { id: sprintReleaseId },
        });
        return sprintRelease;
    };

    return SprintRelease;
};

module.exports = sprintRelease;