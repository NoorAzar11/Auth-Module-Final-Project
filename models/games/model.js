'use strict';

const gamesModels = (sequelize, DataTypes) => sequelize.define('games', {
  title_games: { type: DataTypes.STRING, required: true },
  image:{  type: DataTypes.STRING },
  games_description: {  type: DataTypes.STRING }
});

module.exports = gamesModels;

