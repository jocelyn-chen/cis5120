const todo = document.getElementById("todo");
     
function ListItem({taskName}) {   
   return <p>{taskName}</p>;
}

function handleClick() {
    console.log("Clicked");
}

function handleChange(e) {
    console.log("Input changed:", e.target.value);
}


       
// Put ListItem component inside the board component
function Board() {
    const [tasks, setTasks] = React.useState(['Touch grass', 'Learn React', 'Sip boba']);
    const [newTask, setNewTask] = React.useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const clearTasks = () => {
        setTasks([]);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleAddTask();
        }
    };

    return (
        <div>
            <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleAddTask}>Add</button>

            </div>

            {tasks.map((task) => (
            <ListItem key={task} taskName={task} />
            ))}

            <button onClick={clearTasks}>Clear</button>
        </div>
    );
}
     
const root = ReactDOM.createRoot(todo);
    // At the top level, return the board component
root.render(<Board />); 

