/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_seqid', {
    nextval: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'v_seqid'
  });
};
