"use strict";
module.exports = (sequelize, DataTypes) => {
  const loa = sequelize.define(
    "loa",
    {
      name: DataTypes.STRING,
      doc_type: DataTypes.STRING,
      signature_name: DataTypes.STRING,
      signature_font_style: DataTypes.STRING,
      is_agree: DataTypes.BOOLEAN,
      is_signed: DataTypes.BOOLEAN,
      currentUserId: DataTypes.STRING
    },
    {
      timestamps: true,
      freezeTableName : true
    }
  );

  return loa;
};
