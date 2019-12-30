/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('allocation', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'allocation'
  });
};
