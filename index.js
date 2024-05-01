// You are given an array representing a series of transactions in a small business. 
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/

const incometransactions = transactions.filter(  (tran)=>{

 if(tran[0]== "income"){
    return true
 }else{
    return false
 }

}  )

console.log(incometransactions)

//task 2

const expensetransaction = transactions.filter( (tran)=>{
    if(tran[0]== "expense"){
        return true
    }else{
        return false

    }
}  )

console.log(expensetransaction)
/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/
let sum=0
const totalincome = transactions.filter( (income)=>{
    if(income.includes("income")){
        return sum +=income[1]
    }
}

)

console.log(sum)

let sum2=0
const totalexpense = transactions.filter( (expense)=>{
    if(expense.includes("expense")){
        return sum2 +=expense[1]
    }
}

)

console.log(sum2)


/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/

// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.

console.log(sum-sum2)

let both=[]

const bigerthan500 = transactions.filter( (income)=>{
    if (income[1]=500){
      return  both.push(income) 
    } else
    {return false}
})

console.log (both)

