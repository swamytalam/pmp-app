const sprintEpic = function (sequelize, DataType) {
    const SprintEpic = sequelize.define('sprint_epic', {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: true
        },
        group: {
            type: DataType.STRING,
            allowNull: true
        },
        assignee_id: {
            type: DataType.INTEGER,
            allowNull: true,
            references: {
                model: 'resource',
                key: 'id'
            }
        },
        group_id: {
            type: DataType.INTEGER,
            allowNull: true,
            references: {
                model: 'sprint_group',
                key: 'id'
            }
        },
        desc: {
            type: DataType.STRING,
            allowNull: true
        },
        status_id: {
            type: DataType.INTEGER,
            allowNull: true,
            references: {
                model: 'ref_status',
                key: 'id'
            }
        },
        reporter_id: {
            type: DataType.INTEGER,
            allowNull: true,
            references: {
                model: 'resource',
                key: 'id'
            }
        },
        release_id: {
            type: DataType.INTEGER,
            allowNull: true,
            references: {
                model: 'sprint_release',
                key: 'id'
            }
        }
    }, {
        tableName: 'sprint_epic',
        schema: 'pmpdb',
        timestamps: false
    });

    SprintEpic.findBySprintEpicId = async sprintEpicId => {
        let sprintEpic = await SprintEpic.findAll({
            where: { id: sprintEpicId },
        });
        return sprintEpic;
    };

    return SprintEpic;
};

module.exports = sprintEpic;