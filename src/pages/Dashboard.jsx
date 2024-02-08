
import { useState, useEffect,  } from "react";
import { useLocation } from 'react-router-dom';


// this is an arrow function; aka a lambda.
// always use arrow functions because it's better.
// trust me regular functions in js are really weird.
// what i'm doing here is assigning the arrow function
// to a constant named func
// there's three ways to make a variable:
// use let x = 1   <---- this makes a variable
// use const x = 1 <---- this makes a constant
// use var x = 1   <---- this is broken
// variables declared using const or let follow c++ scoping
// variables declared using var are globally scoped and break things
const func = (parameterList) => { 
    // function body
    return 0;
}

// with react, we will have a js function returning HTML
const Dashboard = () => {


    // this is a page so it needs to return html
    return (
        <>
            <div>
                <p>Dashboard</p>
            </div>
        </>
    )
}


// and at the end, we need to export our functions for use in other files
export default Dashboard;
