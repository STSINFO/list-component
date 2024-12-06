import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 15 },
    { id: 3, name: "Banana", calories: 50 },
    { id: 4, name: "Coconut", calories: 25 },
  ];

  const vegetables = [
    { id: 1, name: "Lemon", calories: 13 },
    { id: 2, name: "Potatoes", calories: 5 },
    { id: 3, name: "Corn", calories: 54 },
    { id: 4, name: "Broccoli", calories: 250 },
  ];
  return (
    <>
      <List items={fruits} category="fruits" />
      <List items={vegetables} category="vegetables" />
    </>
  );
}

export default App;
