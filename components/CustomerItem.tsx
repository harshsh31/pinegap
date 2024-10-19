import { CustomerProps } from "@/types/types";

const CustomerItem = ({
  customer,
  onSelect,
  selectedCustomer,
}: CustomerProps) => (
  <div
    key={customer.id}
    onClick={() => onSelect(customer)}
    className={`cursor-pointer p-4 border-b border-r border-w-1 ${
      customer.id === selectedCustomer.id
        ? "bg-gray-200"
        : "bg-white hover:bg-gray-200"
    }`}
  >
    <h3 className="font-bold text-lg">{customer.name}</h3>
    <p className="text-sm text-gray-500 mt-1 truncated-description">
      {customer.description}
    </p>
  </div>
);

export default CustomerItem;
