module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define("Orders", {
        customerName: { type: DataTypes.STRING, allowNull: true },
        customerNumber: { type: DataTypes.STRING, allowNull: true },
        itemsNumber: { type: DataTypes.INTEGER, allowNull: false },
        totalBeforeDiscount: { type: DataTypes.DECIMAL(11, 2), allowNull: false },
        total: { type: DataTypes.DECIMAL(11, 2), allowNull: false },
        cart: { type: DataTypes.JSON, allowNull: false }
    })

    return Orders;
};
