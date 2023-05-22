import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  const fetchCustomers = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch({ type: "ADD_MANY_CUSTOMERS", payload: json }))
  }
  const addCash = (cash) => {
    dispatch({ type: "ADD CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET CASH", payload: cash });
  };

  const addCustumer = (name) => {
    const addedcustomer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: "ADD CUSTOMER", payload: addedcustomer });
  };

  const removeCustomer = (customer)=>{
    dispatch({ type: "DELEETE CUSTOMER", payload: customer});
  }


  return (
    <>
      <div className="flex">
        <button
          onClick={() => addCash(Number(prompt()))}
          className="button1 flex-item"
        >
          Add Cash
        </button>
        <div style={{ fontSize: "3rem" }}>{cash}</div>
        <button
          onClick={() => getCash(Number(prompt()))}
          className="button1 flex-item"
        >
          Get from Cash
        </button>
      </div>

      <div className="flex">
        <button
          onClick={() => addCustumer(prompt())}
          className="button1 flex-item"
        >
          Add Customer
        </button>
        <button
          onClick={() => getCash(Number(prompt()))}
          className="button1 flex-item"
        >
          delete Customer
        </button>
        <button
          onClick={() => fetchCustomers()}
          className="button1 flex-item"
        >
          Add A lot of custumers
        </button>
      </div>
      
      <div className="flex">
      {!!customers?.length ? (
          <div className="customers">
            {customers.map((customer,id) => (
              <div onClick={()=>removeCustomer(customer)} key= {id} style={{ fontSize: "2rem", border: "1px solid black" }}>
               {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <span style={{ fontSize: "3rem", marginTop: "20px" }}>
            <h2>No CLients Yet</h2>
          </span>
        )}
      </div>
    </>
  );
}

export default App;
