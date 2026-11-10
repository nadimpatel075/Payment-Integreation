const App = () =>{

  let url = "http://localhost:8086/api/payment/create?amount=10";

  const pay_now=async()=>{
    await fetch(url,{method:"POST"})
     .then(response => response.json())
     .then(res => {
         const operate ={
          key : "rzp_test_XgtZV3aUs4S6zv",
          amount : res.amount,
          currency : res.currency,
          order_id : res.id,
          name : "Company",
          description : "Test Transaction",
          handler : (result)=>{
             alert("payment done successfully")
          },
          theme : {
            color : "green"
          }}
          const pay = new Razorpay(operate);
             pay.open();
     })
     .catch(error => console.error(error));
  }


  return (
        <>
          <button onClick={()=>pay_now()}>Pay-Now</button>
        </>
  )

}

export default App;