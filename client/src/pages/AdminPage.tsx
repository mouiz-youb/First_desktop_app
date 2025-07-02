import { Link } from 'react-router-dom'
function AdminPage() {
  return (
    <div className='flex justify-center items-center w-full h-full flex-col'>
      <div className='flex justify-center items-center flex-col w-full'>
          <h1>Admin page</h1>
      </div>
      <div className='w-full h-full grid grid-cols-5 grid-rows-10 '>
        <form  className='col-start-2 col-end-5 row-start-2 row-end-10 border-[1px]'></form>
      </div>
    </div>
  )
}

export default AdminPage