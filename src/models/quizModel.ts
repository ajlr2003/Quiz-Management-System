import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from './database'
type Props = {}

const quizModel = (props: Props) => {
  return 'quizModel';
}; // Adjust the path if needed
 
class Quiz extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public teacher_id!: number;
}

Quiz.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Quiz',
    }
);

export default Quiz;