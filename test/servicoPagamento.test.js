const assert = require('assert');
const servicoPagamento = require('../src/servicoPagamento');

describe('servicoPagamento', () => {

  it('deve realizar um pagamento com categoria cara', () => {
    const servico = new servicoPagamento();

    servico.pagar('0987-7656-3475', 'Samar', 156.87);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.codigoBarras, '0987-7656-3475');
    assert.strictEqual(ultimoPagamento.empresa, 'Samar');
    assert.strictEqual(ultimoPagamento.valor, 156.87);
    assert.strictEqual(ultimoPagamento.categoria, 'cara');
  });

  it('deve realizar um pagamento com categoria padrão', () => {
    const servico = new servicoPagamento();

    servico.pagar('1111-2222', 'Empresa X', 50);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.categoria, 'padrão');
  });

  it('deve retornar apenas o último pagamento', () => {
    const servico = new servicoPagamento();

    servico.pagar('111', 'Empresa 1', 50);
    servico.pagar('222', 'Empresa 2', 200);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.codigoBarras, '222');
  });

});