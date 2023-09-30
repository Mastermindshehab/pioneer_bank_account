const Loginbtn=document.getElementById("login");
 Loginbtn.addEventListener("click",function(){
 const loginArea=document.querySelector(".submit_area");

 loginArea.style.display="none";

 const TrasActionArea=document.getElementById("transactionArea");
 TrasActionArea.style.display="block";

 });


 // transaction handle

 const depositBtn=document.getElementById("addDeposit");
 depositBtn.addEventListener("click",function(){
const depositAmounts=document.getElementById("depositAmount").value;
const depositNumber=parseFloat(depositAmounts);

// const currentDeposits=document.getElementById("currentDeposit").innerText;
// const currentDepositNumber=parseFloat(currentDeposits);

// const totalDeposit=depositNumber + currentDepositNumber;
// document.getElementById("currentDeposit").innerText=totalDeposit;
 updateSpanText("currentDeposit",depositNumber);

// const currentBalance=document.getElementById("TotleBalance").innerText;
// const currentBalanceNumber=parseFloat(currentBalance);
// const  totleBalance=depositNumber + currentBalanceNumber;
// document.getElementById("TotleBalance").innerText=totleBalance;
updateSpanText("TotleBalance",depositNumber);
document.getElementById("depositAmount").value="";
 }
 );

 function updateSpanText(id,depositNumber){
    const currentBalance=document.getElementById("TotleBalance").innerText;
    const currentBalanceNumber=parseFloat(currentBalance);
    const  totleBalance=depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText=totleBalance;

 }


 // widthdrow

 const withdrawBtns=document.getElementById("withdrawBtn");
 withdrawBtns.addEventListener("click",function(){
const inputWithdrawAmount=document.getElementById("withdrawAmount").value;
const inputwithdrawAmountNumber=parseFloat(inputWithdrawAmount);
const currentwithdrawBalance=document.getElementById("withdrawBalance").innerText;
const currentwithdrawBalanceNumber=parseFloat(currentwithdrawBalance);
const totlewithdrawBalance=currentwithdrawBalanceNumber+inputwithdrawAmountNumber;

document.getElementById("withdrawBalance").innerText=totlewithdrawBalance;


// const currentBalance=document.getElementById("TotleBalance").innerText;
//     const currentBalanceNumber=parseFloat(currentBalance);
//     const  totleBalance=currentBalanceNumber - inputwithdrawAmountNumber ;
//     document.getElementById("TotleBalance").innerText=totleBalance;
updateSpanText2("TotleBalance",inputwithdrawAmountNumber);
 });

 function updateSpanText2(id,inputwithdrawAmountNumber){
    const currentBalance=document.getElementById("TotleBalance").innerText;
    const currentBalanceNumber=parseFloat(currentBalance);
    const  totleBalance=currentBalanceNumber - inputwithdrawAmountNumber ;
    document.getElementById(id).innerText=totleBalance;


    document.getElementById("withdrawAmount").value="";


 }


