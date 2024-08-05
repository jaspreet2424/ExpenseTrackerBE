const expenseModel = require("../Modals/Expenses");

const addExpense = async (req, res) => {
  try {
    const { expense, description, paymentType } = req.body;

    if (!expense || !description || !paymentType) {
      return res.status(422).json({
        success: false,
        message: "Missing Input Fields",
      });
    }

    const date = new Date();

    const fullDateAndTime = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const newData = await expenseModel.create({
      expense,
      description,
      paymentType,
      paymentDate: fullDateAndTime,
    });

    res.status(201).json({
      success: true,
      message: "Expense added successfully",
      Data: newData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went Wrong , try to contact with ANSH Infotech.",
      error: error.message,
    });
  }
};

const getAllExpenses = async (req, res) => {
  try {
    const allData = await expenseModel.find();

    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      Data: allData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went Wrong , try to contact with ANSH Infotech.",
      error: error.message,
    });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({
        success: true,
        message: "No expense ID found",
      });
    }

    await expenseModel.findByIdAndDelete(id);

    const allData = await expenseModel.find();
    
    res.status(200).json({
        success: true,
        message: `Item Deleted Successfully`,
        Data: allData,
      });

  } catch (error) {
    res.status(500).json({
        success: false,
        message: "Something went Wrong , try to contact with ANSH Infotech.",
        error: error.message,
      });
  }
};

module.exports = {
  addExpense,
  getAllExpenses,
  deleteExpense,
};
