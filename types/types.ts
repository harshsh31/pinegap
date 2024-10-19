export interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
  description: string;
}
export interface CustomerListProps {
  customers: Customer[];
  selectedCustomer: Customer;
  onSelect: (customer: Customer) => void;
}
export interface CustomerProps {
  customer: Customer;
  selectedCustomer: Customer;
  onSelect: (customer: Customer) => void;
}
export interface CustomerDetailsProps {
  customer: Customer;
}
