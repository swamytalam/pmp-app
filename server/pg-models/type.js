const type = function (sequelize, DataTypes) {
    const Type = sequelize.define('ref_type', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        task_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'ref_type',
        schema: 'pmpdb',
        timestamps: false
    });

    Type.findByTypeId = async typeId => {
        let type = await Type.findAll({
            where: { id: typeId },
        });
        return type;
    };

    return Type;
};

module.exports = type;