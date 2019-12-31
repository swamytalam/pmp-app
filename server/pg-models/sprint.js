const Sprint = function (sequelize, DataType) {
    const Sprint = sequelize.define('sprint', {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        start_date: {
            type: DataType.DATE,
            allowNull: false
        },
        end_date: {
            type: DataType.DATE,
            allowNull: false
        },
        notes: {
            type: DataType.STRING,
            allowNull: true
        }
    }, {
        tableName: 'sprint',
        schema: 'pmpdb',
        timestamps: false
    });
Sprint
    Sprint.findBySprintId = async SprintId => {
        let Sprint = await Sprint.findAll({
            where: { id: SprintId },
        });
        return Sprint;
    };

    return Sprint;
};

module.exports = Sprint;