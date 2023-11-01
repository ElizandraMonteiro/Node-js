const { Router} = require("express");

const usersRoutes = require("./users.routes");
const movieNotesRoutes = require("./movieNotes.routes");
const tagsRoutes = require("./tags.routes");

const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/movieNotes", movieNotesRoutes);
routes.use("/tags", tagsRoutes);

module.exports = routes;