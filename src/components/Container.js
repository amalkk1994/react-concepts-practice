import React, { Suspense } from "react";
import MathAdd from "./MathAdd";
import { ErrorBoundary } from "react-error-boundary";

const ImageContainer = React.lazy(() => import("./ImageContainer"));

const Container = () => {
  return (
    <div>
      <h2>Hello from the container!</h2>
      <MathAdd />
      <Suspense fallback={<div>Loading...</div>}>
        <ImageContainer />
      </Suspense>
    </div>
  );
};

export default Container;
