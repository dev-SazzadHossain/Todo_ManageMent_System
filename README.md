# Todo Management System

## use

`*` React

`*` React Context Api

`*` Local Storage

```
const Context=crateContext()

const TodoContext =(children)=>{
    const [todos,setTodos]=useState(
        [ {id:Date.now(),text:"Todo Message",completed:false,editable:false}  ]
        )

const todoInfo ={todos}
    return (<Context.Provider value={todoInfo}>{children}</Context.Provider>)
}

export const useTodo = ()=>useContext(Context)
export default TodoContext;

```

## Functionality

- addTodo()
- editTodo()
- toggleTodo
- deleteTodo
