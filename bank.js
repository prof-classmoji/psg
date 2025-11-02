// Class 2: BankAccount - Manages a simple bank account
class BankAccount {
  constructor(accountHolderName, initialBalance = 0) {
    this.accountHolder = accountHolderName;
    this.balance = initialBalance;
  }

  print() { 
    const name = "Pape Sow Traore";
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposited $${amount}. New balance: $${this.balance}`;
  }

  getBalancePpape() {
    return `Current balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds!";
    }
    this.balance -= amount;
    return `Withdrew $${amount}. New balance: $${this.balance}`;
  }

  amIBroke(){
    if(this.balance < 0){
      console.log("Lmao");
    }
  }

  getBalance() {
    return `Current balance: $${this.balance}`;
  }
}

// Example usage:
const account = new BankAccount("Bob", 100);
console.log(account.deposit(50)); // "Deposited $50. New balance: $150"
console.log(account.withdraw(30)); // "Withdrew $30. New balance: $120"
console.log(account.getBalance()); // "Current balance: $120"
