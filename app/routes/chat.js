module.exports = function (application) {
    application.post('/chat', function (req, res) {
        application.app.controllers.ChatController.iniciaChat(application, req, res);
    });

    application.get('/chat', function (req, res) {
        application.app.controllers.ChatController.iniciaChat(application, req, res);
    });
};