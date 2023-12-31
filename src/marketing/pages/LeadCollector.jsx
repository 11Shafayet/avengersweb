import { Table } from 'flowbite-react';
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import TableLoader from '../../components/common/TableLoader';

const dummyData = [
  {
    name: 'Shafayet',
    phone: '01638719578',
    email: '11shafayet@gmail.com',
    fbLink: 'https://facebook.com/avengers-web',
    BusinessType: 'mix',
    existingWebLink: 'https://facebook.com/avengers-web',
  },
  {
    name: 'Shafayet',
    phone: '01638719578',
    email: '11shafayet@gmail.com',
    fbLink: 'https://facebook.com/avengers-web',
    BusinessType: 'mix',
    existingWebLink: 'https://facebook.com/avengers-web',
  },
];

const LeadCollector = () => {
  const [loading, setIsLoading] = useState(false);

  return (
    <div className="my-12 overflow-x-auto h-[700px] md:h-auto">
      <div className="container px-4 mx-auto">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          Lead Collector
        </h2>
        {loading ? (
          <TableLoader />
        ) : (
          <>
            {dummyData.length === 0 ? (
              <p className="text-center text-xl font-semibold">No Data Found</p>
            ) : (
              <Table striped className="relative">
                <Table.Head>
                  <Table.HeadCell className="text-start">Name</Table.HeadCell>
                  <Table.HeadCell className="text-start">Phone</Table.HeadCell>
                  <Table.HeadCell className="text-start">
                    FB Page Link
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">Email</Table.HeadCell>
                  <Table.HeadCell className="text-start">
                    Business Type
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">
                    Existing Website Link
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">Delete</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {dummyData?.map((item) => (
                    <Table.Row className="bg-gray-100" key={item?._id}>
                      <Table.Cell>{item.name}</Table.Cell>
                      <Table.Cell className="whitespace-wrap font-bold  min-w-[200px]">
                        {item.phone}
                      </Table.Cell>
                      <Table.Cell>{item.fbLink}</Table.Cell>
                      <Table.Cell>{item.email}</Table.Cell>
                      <Table.Cell>{item.BusinessType}</Table.Cell>
                      <Table.Cell>{item.existingWebLink}</Table.Cell>
                      <Table.Cell>
                        <FaTrash className="text-red-500 cursor-pointer" />
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LeadCollector;
