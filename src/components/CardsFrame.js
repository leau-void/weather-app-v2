import { Button } from "@mui/material";

const CardsFrame = (props) => {
  const { children, prev, next } = props;
  return (
    <div>
      <Button onClick={prev}>Prev</Button>
      {Array.isArray(children) ? children.map((child) => child) : children}
      <Button onClick={next}>Next</Button>
    </div>
  );
};

export default CardsFrame;
