import React, { Suspense } from "react";
import MathAdd from "./MathAdd";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../Utils/ErrorFallBackUtil";

const ImageContainer = React.lazy(() => import("./ImageContainer"));

const Container = () => {
  return (
    <div>
      <h2>Hello from the container!</h2>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
        <MathAdd />
        <Suspense fallback={<div>Loading...</div>}>
          <ImageContainer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Container;
