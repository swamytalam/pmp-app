const month = function (sequelize, DataTypes) {
    const Month = sequelize.define('ref_month', {
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
        tableName: 'ref_month',
        schema: 'pmpdb',
        timestamps: false
    });

    Month.findByMonthId = async monthId => {
        let month = await Month.findAll({
            where: { id: monthId },
        });
        return month;
    };

    return Month;
};

module.exports = month;