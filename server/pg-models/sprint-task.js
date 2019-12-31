const sprintTask = function (sequelize, DataTypes) {
    const SprintTask = sequelize.define('sprint_task', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: true
        },
        release_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'sprint_release',
                key: 'id'
            }
        },
        epic_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'sprint_epic',
                key: 'id'
            }
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'ref_status',
                key: 'id'
            }
        },
        assignee_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'resource',
                key: 'id'
            }
        },
        reported_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'resource',
                key: 'id'
            }
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'sprint_group',
                key: 'id'
            }
        }
    }, {
        tableName: 'sprint_task',
        schema: 'pmpdb',
        timestamps: false
    });

    SprintTask.FindByPrint_taskId = async sprintTaskId => {
        let sprintTask = await SprintTask.findAll({
            where: { id: sprintTaskId },
        });
        return sprintTask;
    };

    return SprintTask;
};

module.exports = sprintTask;