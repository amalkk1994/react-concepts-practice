import { add } from "../Utils/MathUtils";
// dynamic import
import("../Utils/MathUtils").then((math) => {
  console.log(math.add(5, 7));
});

const MathAdd = () => {
  const sum = add(5, 6);

  return (
    <div>
      <p>{sum}</p>
    </div>
  );
};

export default MathAdd;
