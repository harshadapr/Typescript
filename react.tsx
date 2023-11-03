// react-example.tsx

import React from "react";

interface GreetingProps {
    name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

const App: React.FC = () => {
    return (
        <div>
            <Greeting name="TypeScript" />
        </div>
    );
};

export default App;
