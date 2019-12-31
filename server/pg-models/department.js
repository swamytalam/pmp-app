const department = function (sequelize, DataTypes) {
  const Department = sequelize.define('department', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
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
    tableName: 'department',
    schema: 'pmpdb',
    timestamps: false
  });

  Department.findByDepartmentId = async deptId => {
    let department = await Department.findAll({
      where: { id: deptId },
    });
    return department;
  };

  return Department;
};

module.exports = department;