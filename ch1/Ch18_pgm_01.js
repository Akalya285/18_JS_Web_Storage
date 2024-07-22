const personAccount = {
    firstName: 'Alice',
    lastName: 'Johnson',
    incomes: [
        { description: 'Salary', amount: 5000 },
        { description: 'Freelancing', amount: 1500 }
    ],
    expenses: [
        { description: 'Rent', amount: 1200 },
        { description: 'Utilities', amount: 300 }
    ],
    totalIncome: function() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    totalExpense: function() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    accountInfo: function() {
        return `Name: ${this.firstName} ${this.lastName}, Total Income: $${this.totalIncome()}, Total Expenses: $${this.totalExpense()}`;
    },
    addIncome: function(description, amount) {
        this.incomes.push({ description, amount });
    },
    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

// Example usage
console.log(personAccount.accountInfo()); // Initial information
personAccount.addIncome('Investment', 2000);
personAccount.addExpense('Groceries', 400);
console.log(personAccount.accountInfo()); // Updated information
console.log('Account Balance: $', personAccount.accountBalance());
