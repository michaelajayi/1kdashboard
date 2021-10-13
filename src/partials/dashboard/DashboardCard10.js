import React from 'react';

import Image01 from '../../images/user-36-11.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-12.jpg';
import Image04 from '../../images/user-36-13.jpg';
import Image05 from '../../images/user-36-10.jpg';

function DashboardCard10() {

  const customers = [
    {
      id: "0",
      image: Image01,
      name: "Adamu Williams",
      phone: "08062946833",
      // location: '🇺🇸',
      spent: "₦32,890.66",
    },
    {
      id: "1",
      image: Image02,
      name: "Philip Onyekachi",
      phone: "07082015041",
      // location: '🇩🇪',
      spent: "₦28,767.04",
    },
    {
      id: "2",
      image: Image03,
      name: "Aina Adetutu",
      phone: "08062946833",
      // location: '🇫🇷',
      spent: "₦25,996.00",
    },
    {
      id: "3",
      image: Image04,
      name: "Rebecca Osuji",
      phone: "08034468921",
      // location: '🇮🇹',
      spent: "₦19,220.66",
    },
    {
      id: "4",
      image: Image05,
      name: "Chioma Ebubedike",
      phone: "07098824493 ",
      // location: '🇬🇧',
      spent: "₦18,890.66",
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Top Spending Customers</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Phone</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Spent</div>
                </th>
                {/* <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Country</div>
                </th> */}
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                          <div className="font-medium text-gray-800">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.phone}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{customer.spent}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{customer.location}</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
