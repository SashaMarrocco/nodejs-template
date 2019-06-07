const App = require('./app');

describe('App::main', () => {
    beforeAll(() => {
        this.consoleLogSpy = jest
            .spyOn(global.console, 'log')
            .mockImplementation(() => {});
    });

    test('It is defined', () => {
        expect(App.main).toBeDefined();
    });

    test('It outputs hello world!', () => {
        App.main();
        expect(this.consoleLogSpy).toHaveBeenCalledWith('Hello world!');
    });

    afterAll(() => {
        this.consoleLogSpy.mockRestore();
    });
});
