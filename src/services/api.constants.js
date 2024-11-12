export default Object.freeze({
    auth: {
        signIn: `/dev/api/auth/login`,
    },
    projects: {
        create: `/dev/api/projects`,
        delete: `/dev/api/projects/:id`,
        update: `/dev/api/projects/:id`,
        find: `/dev/api/projects/:id`,
        filter: `/dev/api/projects`
    }
});