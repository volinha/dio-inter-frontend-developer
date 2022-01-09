const users = new Map();

const getAdmins = (map) => {
    let adminList = [];

    for ([nome, role] of map) {
        if (role === 'admin') {
            adminList.push(nome);
        }
    }
    return adminList;
}

users.set('Vinicius', 'admin');
users.set('Arthur', 'user');
users.set('Alice', 'user');
users.set('Marcelo', 'admin');
users.set('João', 'owner');

console.log(getAdmins(users));