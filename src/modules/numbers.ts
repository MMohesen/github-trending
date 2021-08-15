export interface NumberInterface {
  amount: number;
  total: string;
}
export default class Numbers implements NumberInterface {
  readonly numberFormat: any = Intl.NumberFormat();
  amount: number = 0;
  total: string = "";
  constructor(amount) {
    this.amount = amount;
    this.total = this.numberFormat.format(amount);
  }
}
