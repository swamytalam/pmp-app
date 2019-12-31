const project = function (sequelize, DataTypes) {
  const Project = sequelize.define('project', {
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
    }
  }, {
    tableName: 'project',
    schema: 'pmpdb',
    timestamps: false
  });

  Project.findByProjectId = async projectId => {
    let project = await Project.findAll({
      where: { id: projectId },
    });
    return project;
  };

  return Project;
};

module.exports = project;