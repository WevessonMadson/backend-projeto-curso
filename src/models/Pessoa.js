import { BOOLEAN, DECIMAL, INTEGER, STRING } from 'sequelize';
import sequelize from "../database/config_bd.js";

const Pessoa = sequelize.define(
    'pessoa',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: STRING,
        allowNull: false
      },
      idade: {
        type: DECIMAL,
        allowNull: false,
      },
      uf: {
        type: STRING,
        allowNull: false
      },
      deletado: {
        type: BOOLEAN,
        allowNull: false
      }
    },
  );

export default Pessoa;