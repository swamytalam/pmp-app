const resource = function (sequelize, DataTypes) {
  const Resource = sequelize.define('resource', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    objectives: {
      type: DataTypes.STRING,
      allowNull: true
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'department',
        key: 'id'
      }
    }
  }, {
    tableName: 'resource',
    schema: 'pmpdb',
    timestamps: false
  });

  Resource.findByResourceDepartmentId = async departmentId => {
    let resource = await Resource.findAll({
      where: { department_id: departmentId },
    });
    return resource;
  };

  Resource.findResourceId = async resourceId => {
    let resource = await Resource.findAll({
      where: { id: resourceId },
    });
    return resource;
  };

  return Resource;
};

module.exports = resource;