import { ContractModel } from '../models/Contract.model';

describe('Class ContractModel', () => {
  test('Contract 6 month', () => {
    const contract = new ContractModel({
      id: '#001',
      date_init: new Date(2019),
      expiration_date: new Date(2020),
      month: 12,
      monthlyCost: 500,
    });
    expect(contract.getId()).toBe('#001');
    expect(contract.getDateInit()).toEqual(new Date(2019));
    expect(contract.getExpirationDate()).toEqual(new Date(2020));
    expect(contract.getMonth()).toBe(12);
    expect(contract.getMonthlyCost()).toBe(500);
  });

  it('monthlyDiscount contract Primer 24 months', () => {
    const contractPrime = new ContractModel({
      id: '#001',
      date_init: new Date(2019),
      expiration_date: new Date(2020),
      month: 12,
      monthlyCost: 500,
    });
  });
});
