const milestone = function (sequelize, DataTypes) {
    const Milestone = sequelize.define('milestone', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'milestone',
        schema: 'pmpdb',
        timestamps: false
    });

    Milestone.findMilestonesByProjectId = async projectId => {
        let milestone = await Milestone.findAll({
            where: { project_id: projectId },
        });
        return milestone;
    };

    return Milestone;
};

module.exports = milestone;