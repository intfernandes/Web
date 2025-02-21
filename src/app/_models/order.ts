export interface Order {
  id: string | null;
  customerId: string | null;
  memberId: string | null;
  orderDate: string | null;
  status: string | null;
  notes: any;
  orderItems: any[];
  shippingAddress: any;
  billingAddress: any;
  totalAmount: number | null;
}
