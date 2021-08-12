<<<<<<< HEAD
const connectionDataBase = require("../../infrastructure/database/connection")

describe("test conexion data base", () => {
    it("Should return MongoDB conected", async () =>{

    })
})
=======
let mongoose = require('mongoose');
const config = require("../../infrastructure/config/index");
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
jest.mock('mongoose');

describe('connectDatabase', () => {
    const dbModule = require('../../infrastructure/database/connection');

    it('should connect database succesfully', function (done) {
        var consoleLogSpyOn = jest.spyOn(console, 'log');
        var mongooseConnectSpyOn = jest
            .spyOn(mongoose, 'connect')
            .mockImplementationOnce(function (uris, options, callback) {
                if (callback) {
                    callback();
                    done();
                }
                return Promise.resolve(mongoose);
            });
        dbModule.connectDB()
        expect(mongooseConnectSpyOn).toBeCalledWith(`mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`,
            { useNewUrlParser: true,
                useUnifiedTopology: true ,
                useCreateIndex: true }, dbModule.callback);
        expect(consoleLogSpyOn).toBeCalledWith('Mongodb connected')
        consoleLogSpyOn.mockRestore();
    });

    it('connect database error', function (done) {
        var consoleLogSpyOn = jest.spyOn(console, 'log');
        var mongooseConnectSpyOn = jest
            .spyOn(mongoose, 'connect')
            .mockImplementationOnce(function (uris, options, callback) {
                if (callback) {
                    callback(new Error('connect error'));
                    done();
                }
                return Promise.resolve(mongoose);
            });
        dbModule.connectDB();
        expect(mongooseConnectSpyOn).toBeCalledWith(`mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`,
            { useNewUrlParser: true,
                useUnifiedTopology: true ,
                useCreateIndex: true }, dbModule.callback);
        expect(consoleLogSpyOn).toBeCalledWith('connect error');
        consoleLogSpyOn.mockRestore();
    });

});
>>>>>>> 8ca3c65bb3d4e73a87ca3d62df9321b06f590dba
