import React from "react";
import { Route } from "react-router-dom";
import AddInform from "./components/addInform";
import CardStudent from "./components/cardStudent";
const App = () => {
    
    return (
        <>
        <Route path="/" exact component={CardStudent} />
        <Route path="/addInform" exact component={AddInform} />
        </>
     
    )
};
export default App;
