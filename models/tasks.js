module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {
                    title: "Fazendo compras"
                },
                {
                    title: "Consertar o PC"
                }
            ]);
        }
    };
};