import "./App.css";

const users = [
  {
    name: "lucas",
    address: "rua do milho",
    age: 27,
    isAdmin: false,
  },
  {
    name: "tati",
    address: "rua do trigo",
    age: 25,
    isAdmin: false,
  },

  {
    name: "bruce",
    address: "rua do milho",
    age: 6,
    isAdmin: true,
  },
];

function App() {
  return (
    <>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            {user.name},{user.age},{index}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
