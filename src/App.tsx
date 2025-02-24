import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import Alert from "./components/Alert";
import Like from "./components/Like";

function App() {
  let title = "Cities";
  let cities = ["Kathmandu", "New York", "San Francisco"];

  // to show cities
  const [listVisible, setListVisibility] = useState(false);

  // for list clicks
  const onSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Like onClick = {()=> console.log("Clicked")} />
      <Button onClick={() => setListVisibility(true)}>Show</Button>
      {listVisible && (
        <Alert onClose={() => setListVisibility(false)}>
          <ListGroup
            heading={title}
            items={cities}
            onSelectItem={onSelectItem}
          ></ListGroup>
        </Alert>
      )}
    </>
  );
}

export default App;
