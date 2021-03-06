import { IContract } from '../interfaces/IContracts';

export class ContractModel {
  constructor(public contract: IContract) {
    Object.assign(this, contract);
  }

  getId(): string {
    return this.contract.id;
  }

  getDateInit(): Date {
    return this.contract.date_init;
  }

  getExpirationDate(): Date {
    return this.contract.expiration_date;
  }

  getMonth(): number {
    return this.contract.month;
  }

  getMonthlyCost(): number {
    return this.contract.monthlyCost;
  }
}
