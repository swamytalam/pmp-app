const deptartment = function (sequelize, DataTypes) {
  const Deptartment = sequelize.define('dept', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'dept',
    schema: 'pmpdb',
    timestamps: false
  });

  Deptartment.findByDeptId = async deptId => {
    let deptartment = await Deptartment.findAll({
      where: { id: deptId },
    });
    return deptartment;
  };

  return Deptartment;
};

module.exports = deptartment;