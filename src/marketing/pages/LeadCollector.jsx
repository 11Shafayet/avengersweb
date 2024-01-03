import { Table } from 'flowbite-react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import TableLoader from '../../components/common/TableLoader';
import { Link } from 'react-router-dom';

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
        <div className="flex justify-between items-center mb-12 sm:mb-20">
          <h2 className="text-center font-bold text-3xl md:text-5xl">
            Lead Collector
          </h2>
          <div>
            <Link
              to={`/marketing/lead-collector/add`}
              className="bg-primary py-3 px-6 text-white font-bold uppercase rounded-md hover:translate-y-1 duration-500"
            >
              Add Lead +
            </Link>
          </div>
        </div>
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
                  <Table.HeadCell className="text-start">Edit</Table.HeadCell>
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
                        <Link to={`/marketing/lead-collector/1`}>
                          <FaEdit className="text-primary cursor-pointer" />
                        </Link>
                      </Table.Cell>
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
