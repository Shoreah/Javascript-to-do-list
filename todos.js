const todo = ['Collect Chicken eggs', 'Clean Cat Litterbox'];
let add = 'new'
let remove = 'delete'
let view = 'list'
let exit = 'quit'
let exit2 = 'q'
let input = prompt('What would you like to do')
while(input !== exit && input !== exit2){
    if(input === view){
        console.log('************')
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`)
        }
    }else if(input === add){
        const newTodo = prompt('What would you like to add:')
        todo.push(newTodo)
        console.log(`${newTodo} added to the list`)
    }else if(input === remove){
        const index = parseInt(prompt('Enter an index to delete'))
        if(!Number.isNaN(index)){
            const deleted = todo.splice(index, 1);
            console.log(`Okay, deleted ${deleted[0]}`)
        }else{
            console.log('Unknown index')
        }
    }
    input = prompt('What would you like to do')
}

console.log("OK, YOU QUIT THE APP")
