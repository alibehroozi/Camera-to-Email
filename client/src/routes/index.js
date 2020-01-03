//@flow
import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ErrorBoundary from "components/shared/ErrorBoundary";

const CameraPage = React.lazy(() => import("pages/Camera"));

const Routes = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/camera" component={CameraPage} />
          <Route path="/" component={() => <Redirect to="/camera" />} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
