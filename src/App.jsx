import "./App.css";
import GoogleDriver from "./GoogleDriver";
import DropboxButton from "./DropboxButton";
import SelectFileButton from "./SelectFileButton";

function App() {
  return (
    <>
      <div className="App">
        <h1>Select a file</h1>

        <SelectFileButton />
        <GoogleDriver />
        <DropboxButton />
      </div>
    </>
  );
}

export default App;
