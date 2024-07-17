// Define the Todo model

import { DataTypes, Model, Optional } from 'sequelize';
import statsSequelize from '../setup/database';
import { StatsAttributes } from '../../interfaces/models/StatsAttributes';

// Optional fields for model creation
interface StatsCreationAttributes
  extends Optional<StatsAttributes, 'id' | 'Points'> {}

// Define the Todo model class
class StatsModel
  extends Model<StatsAttributes, StatsCreationAttributes>
  implements StatsAttributes
{
  public id!: number;

  public userId!: number;

  public tasksDone!: number;

  public tasksOpen!: number;

  public Points!: number;

  // Timestamps
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

StatsModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tasksDone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tasksOpen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    Points: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: statsSequelize,
    tableName: 'Stats',
  },
);

export default StatsModel;
