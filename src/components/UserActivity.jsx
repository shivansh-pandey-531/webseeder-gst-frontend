import CustomSelectMenu from "./CustomSelectMenu";
import CustomSelectMenu2 from "./CustomSelectMenu2";
import dummyData from '../static/dummyData_UserActivity';


const options_Company = [
  { label: 'Company', id: 1 },
  { label: 'User', id: 2 },
  // Add more dummy data as needed
];

const options_SelectCompany = [];

const options_Operation = [
  { label: 'All', id: 1 },
  { label: 'Create', id: 2 },
  { label: 'Update', id: 3 },
  { label: 'Delete', id: 4 },
  { label: 'Active', id: 5 },
  { label: 'Deactive', id: 6 },
  { label: 'Import', id: 7 },
  // Add more dummy data as needed
];


const UserActivity = () => {

  return (
    <div className={`flex flex-col py-6 px-7 mt-16 gap-6 bg-[#F8F8F8]`}>
      {/* Headings */}
      <div className='flex justify-between w-full items-center'>
        <h2 className='font-medium text-2xl'>User Activity</h2>
      </div>

      
      {/* Main Box */}
      <div className={`relative border border-solid border-[#C5C5C5] rounded-lg w-full min-h-screen`}>

        {/* Select Boxes Panel */}
        <div className='bg-white w-full px-1 rounded-lg flex justify-between gap-7' style={{borderBottom: '1px solid #C5C5C5', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, zIndex: 10}}>
          {/* Left Part */}
          <div className="flex">
            <CustomSelectMenu placeholder={"Company"} options={options_Company} menuWidth={220} />
            <CustomSelectMenu placeholder={"Select Company"} options={options_SelectCompany} menuWidth={220} />
            <CustomSelectMenu2 placeholder={'Operation:'} options={options_Operation} menuWidth={120} placeholderColor="black" />
          </div>

          {/* Right Part */}
          <div></div>
        </div>

        {/* Table Heading + Table */}
        <div className="table-scroll-area">
          <table className='relative'>
            <style>
              {`
                table tr {
                  border-bottom: 2px solid #C5C5C5;
                }
                table thead tr {
                  border-bottom: none;
                }
                table {
                  border-collapse: separate;
                  border-spacing: 0;
                  width: 100%;
                }
                table th, table td {
                  // padding: 8px 8px;
                  text-align: center;
                  border-right: 1px solid #C5C5C5;
                  border-bottom: 1px solid #C5C5C5;
                }
                table td {
                  padding: 10px;
                  font-size: 14px;
                }
                table th {
                  position: sticky;
                  top: 0;
                  background: #C8E1FF;
                  z-index: 20;
                  padding-top: 7px; 
                  padding-bottom: 7px; 
                  font-size: 16px;
                  box-shadow: 0 2px 8px -2px rgba(0,0,0,0.08);
                  border-bottom: 2px solid #C5C5C5;
                }

                table tr:last-child td,
                table tr:last-child th {
                  border-bottom: none;
                }

              `}
            </style>
            <thead className={`bg-[#C8E1FF]`}>
              <tr>
                <th style={{minWidth: 300}}>Activity</th>
                <th>Operation</th>
                <th>Company Name</th>
                <th style={{width: '230px'}}>User</th>
                <th>Period</th>
                <th style={{borderRight: '0px'}}>Date & Time</th>
              </tr>
            </thead>

            {/* Actual data */}
            <tbody>
              {
                dummyData.length === 0? 
                  <tr>
                    <td colSpan={10} className='py-96'>There are no records to display</td>
                  </tr>
                  :
                  dummyData.map((item, idx) => {
                    return (
                      <tr key={idx} className='bg-[#F8F8F8]'>
                        <td>{item.activity}</td>
                        <td>{item.operation}</td>
                        <td>{item.companyName}</td>
                        <td>{item.user}</td>
                        <td>{item.period}</td>
                        <td style={{borderRight: '0px'}}>
                          {item.dateTime.split(' ')[0]}
                          <div className='h-2'></div>
                          {item.dateTime.split(' ')[1]} {item.dateTime.split(' ')[2]}
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
  )
}


export default UserActivity;