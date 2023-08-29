
const TableOne = ({ data }) => {
  return (
    <div className="w-full max-w-4xl rounded-2xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white w-full flex justify-between">
        Users {data.length}
      </h4>

      <div className="flex flex-col">
        <div className="grid sm:grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              ID
            </h5>
          </div>
          <div className="p-2.5  xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              first Name
            </h5>
          </div>
          <div className="p-2.5  xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Last Name
            </h5>
          </div>
          <div className="sm:hidden p-2.5 block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
        </div>

        {data.map((user) => (

        <div className="grid sm:grid-cols-3 border-b border-stroke grid-cols-5" key={user.id}>
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/* <div className="flex-shrink-0">
              <img  className="rounded-full" src="https://i.pravatar.cc/40?Image=500" alt="Brand" />
            </div> */}
            <p className=" text-black block">{user.id}</p>
          </div>

          <div className="flex items-center  p-2.5 xl:p-5">
            <p className="text-black ">{user.first_name}</p>
          </div>

          <div className="flex items-center  p-2.5 xl:p-5">
            <p className="text-meta-3">{user.last_name}</p>
          </div>

          <div className="sm:hidden items-center  xl:p-2.5 flex p-5">
            <p className="text-black ">{user.email} </p>
          </div>
        </div>
        ))}


      </div>
    </div>
  );
};

export default TableOne;
