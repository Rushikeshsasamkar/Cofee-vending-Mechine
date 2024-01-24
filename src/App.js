import "./styles.css";
import { useState } from "react";

export default function App() {
  const coffeeType = ["Small", "Medium", "Large"];
  const [smallQuantity, setSmallQuantity] = useState(0);
  const [mediumQuantity, setMediumQuantity] = useState(0);
  const [largeQuantity, setLargeQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const coffeeSize = e.target.value;

    const confirmOrder = () => {
      const confirmed = window.confirm(
        `Do you want to add a ${coffeeSize} coffee to your order?`
      );

      if (confirmed) {
        switch (coffeeSize) {
          case "Small":
            setSmallQuantity((prev) => prev + 1);
            break;
          case "Medium":
            setMediumQuantity((prev) => prev + 1);
            break;
          case "Large":
            setLargeQuantity((prev) => prev + 1);
            break;
          default:
            break;
        }

        // Repeat the confirmation process
      }
    };
    confirmOrder();
  };

  const calculateBill = () => {
    const smallPrice = 40; // Replace with the actual price for a small coffee
    const mediumPrice = 60; // Replace with the actual price for a medium coffee
    const largePrice = 80; // Replace with the actual price for a large coffee

    const smallTotal = smallQuantity * smallPrice;
    const mediumTotal = mediumQuantity * mediumPrice;
    const largeTotal = largeQuantity * largePrice;

    const totalAmount = smallTotal + mediumTotal + largeTotal;
    setTotal(totalAmount);

    // Display the breakdown
    console.log("Small: ", smallTotal);
    console.log("Medium: ", mediumTotal);
    console.log("Large: ", largeTotal);
    console.log("Total: ", totalAmount);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="App">
      <h1>Coffee Vending Machine</h1>
      <p>Select the Coffee you want</p>
      <select name="type" onChange={(e) => handleChange(e)}>
        {coffeeType.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p>Small: {smallQuantity}</p>
      <p>Medium: {mediumQuantity}</p>
      <p>Large: {largeQuantity}</p>
      <hr />
      <p>Total: {total}</p>
      <button onClick={calculateBill}>Place the order</button>
    </div>
  );
}
