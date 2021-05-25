import client from "../client";

export default {
    Mutation: {
        createCoffee: (_, { title, milk }) =>
            client.coffee.create({
                data: {
                    title,
                    milk,
                }
            }),
    },
}