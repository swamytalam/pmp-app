const year = function (sequelize, DataTypes) {
    const Year = sequelize.define('ref_year', {
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
          tableName: 'ref_year',
        schema: 'pmpdb',
        timestamps: false
    });

    Year.findByYearId = async yearId => {
        let year = await Year.findAll({
            where: { id: yearId },
        });
        return year;
    };

    return Year;
};

module.exports = year;