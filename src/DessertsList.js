function DessertsList({ data }) {
  const lowCaloriesList = data
    .filter((desserts) => desserts.calories < 500)
    .sort((a, b) => a.calories - b.calories);
  return (
    <ul>
      {lowCaloriesList.map((element) => (
        
        <li key={element.name}>        
            {element.name} - {element.calories} cal </li>
      ))}
    </ul>
  );
}

export default DessertsList;
