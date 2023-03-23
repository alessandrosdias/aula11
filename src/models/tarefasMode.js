import bd from "../infra/bd";

const tarefasModel = {
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
            dados: { msg: "Tarefa criada com sucesso"},
            status: 200
        };
    },
};

export default tarefasModel;