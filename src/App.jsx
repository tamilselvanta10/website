import Child from "./Children.jsx";
import "./App.css";

function App() {
  const users = [
    { id: 1, name: "Tamilselvan", city: "Salem", age: 25, email: "tamil@gmail.com", phone: "9876543210" },
    { id: 2, name: "Arun", city: "Chennai", age: 24, email: "arun@gmail.com", phone: "9876543211" },
    { id: 3, name: "Priya", city: "Bangalore", age: 23, email: "priya@gmail.com", phone: "9876543212" },
    { id: 4, name: "Ravi", city: "Coimbatore", age: 26, email: "ravi@gmail.com", phone: "9876543213" },
    { id: 5, name: "Meena", city: "Madurai", age: 22, email: "meena@gmail.com", phone: "9876543214" },
  ];

  return (
    <div className="user-container">
      {users.map((user) => (
        <Child
          key={user.id}
          name={user.name}
          city={user.city}
          age={user.age}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </div>
  );
}

export default App;