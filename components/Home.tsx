"use client";
import { useState } from "react";
import CustomerList from "../components/CustomerList";
import CustomerDetails from "../components/CustomerDetails";
import { Customer } from "@/types/types";
import data from "@/public/data.json";

const Home = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>(data[0]);

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-100 overflow-y-scroll">
        <CustomerList
          customers={data}
          selectedCustomer={selectedCustomer}
          onSelect={setSelectedCustomer}
        />
      </div>

      <div className="w-2/3 text-center bg-white p-6 overflow-auto">
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default Home;
