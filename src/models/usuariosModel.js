import bd from "../infra/bd.js";

const usuariosModel = {
    modelar: (obj) => {
        return {
            titulo: obj.titulo,
            descricao: obj.descricao,
            criacao: obj.criacao,
        };
    },

    armazenar: (obj) => {
        const modelado = tarefasModel.modelar(obj);
        bd.tarefas.push(modelado);
        return {
            dados: { msg: "Usuario criado com sucesso"},
            status: 201,
        };
    },
    mostarTodos: () => {
        return {
            dados: { msg: bd.usuarios},
            status: 200
        };
    },

    mostarUm: (param) => {
        bd.usuarios.map( (item) => {
            if (item.email == param) {
                return item
            }
        })
    }

    


};

export default usuariosModel;