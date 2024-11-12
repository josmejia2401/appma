export default Object.freeze({
    auth: {
        signIn: `/dev/api/v1/security/login`,
    },
    projects: {
        create: `/dev/api/v1/projects`,
        delete: `/dev/api/v1/projects/:id`,
        update: `/dev/api/v1/projects/:id`,
        find: `/dev/api/v1/projects/:id`,
        filter: `/dev/api/v1/projects`
    }
});