/* const heading = React.createElement("h1",
    { id: "heading" },
    "Hello World from React !"); */

/* creating nested str in React
<div id="parent">
    <div id="child 1">
        <hi>"I am heading 1"</hi>
        <h2>"I am heading 2"</h2>

    </div>
    <div id="child 2">
        <hi>"I am heading 1"</hi>
        <h2>"I am heading 2"</h2>

    </div>
</div> */

const parent=React.createElement("div",
    {id: "parent"},
    [React.createElement("div",
        {id: "child1"},
        [
            React.createElement("h1", {}, "I am heading 1"),
            React.createElement("h2", {}, "I am heading 2")
        ]
    ),
    React.createElement("div",
        {id: "child2"},
        [
            React.createElement("h1", {}, "I am heading 1"),
            React.createElement("h2", {}, "I am heading 2")
        ]
    )
]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);