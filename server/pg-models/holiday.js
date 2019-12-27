/* jshint indent: 2 */

const holiday = function (sequelize, DataTypes) {
  const Holiday = sequelize.define('holiday', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    holiday_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    month_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'holiday',
    schema: 'pmpdb',
    timestamps: false
  });

  Holiday.findByYearId = async yearId => {
    let holiday = await Holiday.findAll({
      where: { year_id: yearId },
    });
    return holiday;
  };

  return Holiday;
};

module.exports = holiday;