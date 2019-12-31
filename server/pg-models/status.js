const status = function (sequelize, DataTypes) {
    const Status = sequelize.define('ref_status', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'ref_status',
        schema: 'pmpdb',
        timestamps: false
    });

    Status.findByStatusId = async statusId => {
        let status = await Status.findAll({
            where: { id: statusId },
        });
        return status;
    };

    return Status;
};

module.exports = status;