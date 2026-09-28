
// const container = document.getElementById('container')

// const renderUsers = (users = []) => {
//     return users.forEach((user) => {
//         const div = document.createElement('giv')
//         div.innerHTML = (`
//             <h2>${user.username}</h2>
//             <span>${user.diroction}</span> <b> ник ${user.nikname}</b>
//             <span>${user.age} лет</span>
//             <span>${user.IsStudent ? 'Студент' : 'Не студент'}</span>
//         `)

//         container.appendChild(div)
//     })
// };


// const arr = `[
//     {
//         "username": "bob",
//         "age": 25
//     },
    
//     {
//         "username": "tom",
//         "age": 20,
//     }
// ]`

// const list = [
//     {
//         name_list: "название часов",
//         price: 2000
//     },
//     {
//         name_list: "название каких то часов ",
//         price: 2499
//     }
// ]

// console.log(typeof arr);

// try{
//     console.log(JSON.parse(arr));
// }catch(err){
//     console.error(err);  
// }

// console.log(JSON.stringify(list));



// const users = [
//     {
//         username: 'tom holend',
//         diroction: 'Frontend',
//         age: 25,
//         IsStudent: false,
//         nikname: 'BANKAI'
//     },

//     {
//         username: 'bob',
//         diroction: 'Backend',
//         age: 35,
//         IsStudent: true,
//         nikname: 'Levi'
//     }
// ];

// renderUsers(users)



// let obj = {//     name: 'Bob',//     'name city': 'Osh'// };

// console.log(obj['name city']);// console.log(obj.name);// const arr = `[//     {//         "username": "Bekmyrza",//         "age": 28//     },//     {//         "username": "Islam",//         "age": 24,//     }// ]`;

// const listWatch = [//     {//         watch_name: 'Название часов',//         price: 2000 //     },//     {//         watch_name: 'Название каких-то часов',//         price: 2499 //     }// ];

// console.log(typeof arr);// console.log(arr);

// try{//     console.log(JSON.parse(arr));// }catch(err){//     console.error(err);// }

// console.log(JSON.stringify(listWatch));

const container = document.getElementById('container');

const renderUsers = (users = []) => {
    return users.forEach((user) => {
        const div = document.createElement('div');
        div.innerHTML = (`
            <h2>${user.username}</h2>
            <span>${user.direction}</span> <b>${user.nickname}</b>
            <span>${user.age} лет</span>
            <span>${user.isStudent ? 'Студент' : ''}</span>
        `);
        container.appendChild(div);
    });
};


const users = `[
    {
        "username": "Leonel Messi",
        "direction": "Frontend",
        "nickname": "ML10",
        "isStudent": false,
        "age": 39
    },
    {
        "username": "Cristiano Ronaldo",
        "direction": "Backend",
        "nickname": "CR7",
        "isStudent": true,
        "age": 41
    }
]`;

try{
    renderUsers(JSON.parse(users));
}catch(err){
    console.error(err);
    
}