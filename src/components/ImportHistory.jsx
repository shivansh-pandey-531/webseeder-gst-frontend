import dummyData from '../static/dummyData_ImportHistory';
import CustomSelectMenu from './CustomSelectMenu';


const options = [
  { label: 'Apex Enterprises', id: 1 },
  { label: 'NextGen Pvt Ltd.', id: 2 },
  { label: 'Synergy Corp', id: 3 },
  { label: 'Green Leaf Ventures', id: 4 },
  { label: 'Global Corp', id: 5 },
  // Add more dummy data as needed
];


const ImportHistory = () => {

  return (
    <div className={`flex flex-col py-6 px-7 mt-16 gap-6 bg-[#F8F8F8]`}>
      {/* Headings */}
      <div className='flex justify-between w-full items-center'>
        <h2 className='font-medium text-2xl'>Import History</h2>
      </div>

      
      {/* Main Box */}
      <div className={`relative border border-solid border-[#C5C5C5] rounded-lg w-full min-h-screen`}>

        {/* Select Boxes Panel */}
        <div className='bg-white w-full px-1 rounded-lg flex justify-start' style={{borderBottom: '1px solid #C5C5C5', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, zIndex: 10}}>
          <CustomSelectMenu placeholder={"Select company"} menuWidth={200} options={options} />
          <CustomSelectMenu placeholder={"Select Return period"} isDisabled={true} menuWidth={200} />
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
                  padding: 8px;
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
                <th style={{ minWidth: '55px' }}>Sr.No.</th>
                <th>File Name</th>
                <th>Return type</th>
                <th className='min-w-24'>Period</th>
                <th style={{ maxWidth: '95px', width: '95px' }}>Status</th>
                <th>Success count</th>
                <th>Fail count</th>
                <th>Download file</th>
                <th>Check Sheet</th>
                <th style={{borderRight: '0px', minWidth: '110px'}}>Date & Time</th>
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
                  dummyData.map((item) => {
                    return (
                      <tr key={item.srNo} className='bg-[#F8F8F8]'>
                        <td>{item.srNo}</td>
                        <td>{item.fileName}</td>
                        <td>{item.returnType}</td>
                        <td>{item.period}</td>
                        <td>{item.status}</td>
                        <td>{item.successCount}</td>
                        <td>{item.failCount}</td>
                        <td>{item.downloadFile}</td>
                        <td>{item.checkSheet}</td>
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


export default ImportHistory;