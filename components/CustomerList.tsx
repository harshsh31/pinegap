import { CustomerListProps } from "@/types/types";
import CustomerItem from "./CustomerItem";

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  selectedCustomer,
  onSelect,
}) => {
  return (
    <div>
      {customers.map((customer) => (
        <CustomerItem
          key={customer.id}
          customer={customer}
          onSelect={onSelect}
          selectedCustomer={selectedCustomer}
        />
      ))}
    </div>
  );
};

export default CustomerList;
