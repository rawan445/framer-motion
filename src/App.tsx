import Example from "./Example";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";

function App() {

  return (
    <div className="bg-black flex flex-col justify-center  gap-7 items-center h-full w-full pb-32">
      <Example />
      <Example1/>
      <div>
        <Example2 />
        <div className="flex justify-center items-center flex-col gap-10 mt-10">
          <Example3 />
          <Example4 />
        </div>
      </div>
    </div >
  );
}

export default App;
