import bcrypt from "bcryptjs";
import client from "../client";

export default {
    Mutation: {
        createAccount: async (
            _,
            { username, email, name, location, password, avatarURL, githubUsername }
        ) => {
            const existingUser = await client.user.findFirst({
                where: {
                    OR: [
                        {
                            username,
                        },
                        {
                            email,
                        },
                    ],
                },
            });
            if (existingUser) {
                return {
                    ok: false,
                    error: "This username/email is already exist"

                };
            }

            const uglyPassword = await bcrypt.hash(password, 10);

            const createdUser = await client.user.create({
                data: {
                    username,
                    email,
                    name,
                    location,
                    password: uglyPassword,
                    avatarURL,
                    githubUsername,
                },
            });
            if (createdUser) return { ok: true };
        }
    },
}