const allocation = function (sequelize, DataTypes) {
  const Allocation = sequelize.define('allocation', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'allocation',
    schema: 'pmpdb',
    timestamps: false
  });

  Allocation.findByAllocationId = async allocationId => {
    let allocation = await Allocation.findAll({
      where: { id: allocationId },
    });
    return allocation;
  };

  return Allocation;
};

module.exports = allocation;