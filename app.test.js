const saludo = require('./app');

test('Verificar saludo', () => {
    expect(saludo()).toBe("Saludo desde Docker :JC");
});