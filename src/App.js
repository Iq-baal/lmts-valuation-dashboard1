import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const App = () => {
  const [allocations, setAllocations] = useState([
    { category: "Founders", percentage: 20, value: 200000 },
    { category: "Investors", percentage: 30, value: 300000 },
    { category: "Advisors", percentage: 10, value: 100000 },
    { category: "Public", percentage: 40, value: 400000 },
  ]);

  const totalValue = allocations.reduce((acc, item) => acc + item.value, 0);

  const handleInputChange = (index, field, value) => {
    const newAllocations = [...allocations];
    newAllocations[index][field] =
      field === "percentage" || field === "value" ? Number(value) : value;
    setAllocations(newAllocations);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <motion.h1
        className="text-3xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        LMTS Valuation Dashboard
      </motion.h1>

      <Card className="w-full max-w-4xl shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 border">
              <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 border">Category</th>
                  <th className="px-4 py-3 border">Allocation (%)</th>
                  <th className="px-4 py-3 border">Value ($)</th>
                </tr>
              </thead>
              <tbody>
                {allocations.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 border">
                      <input
                        type="text"
                        value={item.category}
                        onChange={(e) =>
                          handleInputChange(index, "category", e.target.value)
                        }
                        className="w-full border rounded p-1"
                      />
                    </td>
                    <td className="px-4 py-2 border">
                      <input
                        type="number"
                        value={item.percentage}
                        onChange={(e) =>
                          handleInputChange(index, "percentage", e.target.value)
                        }
                        className="w-full border rounded p-1"
                      />
                    </td>
                    <td className="px-4 py-2 border">
                      <input
                        type="number"
                        value={item.value}
                        onChange={(e) =>
                          handleInputChange(index, "value", e.target.value)
                        }
                        className="w-full border rounded p-1"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-semibold bg-gray-50">
                  <td className="px-4 py-2 border text-right" colSpan="2">
                    Total Value
                  </td>
                  <td className="px-4 py-2 border">${totalValue.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            💡 Adjust your allocation and simulate your LMTS token distribution instantly.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
