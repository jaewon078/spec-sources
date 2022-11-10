const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.route("/hello").get(controllers.hello); // hello signifies an endpoint in the controller
router.route("/api/sources").get(controllers.get_source);
router.route("api/add_source").post(controllers.add_source);
router.route("api/delete_source/:id").post(controllers.delete_source);

module.exports = router;