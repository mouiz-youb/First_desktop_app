import { Input } from '@/components/ui/input'
// import { InputWithLabel } from '@/components/InputWithLabel'
// import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
function AdminPage() {
  return (
    <div className='flex justify-center items-center w-full h-full flex-col'>
      <div className='flex justify-center items-center flex-col w-full'>
          <h1>Admin page</h1>
      </div>
      <div className='w-full h-full grid grid-cols-5 grid-rows-10 '>
        <form  className=' bg-gray-100 rounded-2xl col-start-2 col-end-5 row-start-2 row-end-10 border-[1px] px-5 py-2  flex justify-evenly items-center flex-col gap-5 '>
          <h1>create the product</h1>
          <Input type='email' placeholder='Enter your email' className=' bg-white w-1/2'/>
          <Input type='text' placeholder='Enter your First_name' className=' bg-white w-1/2'/>
          <Input type='text' placeholder='Enter your Last_name' className=' bg-white w-1/2'/>
          <Input type='number' placeholder='Enter your Phone_number' className=' bg-white w-1/2'/>
          <Button className='w-1/2 shadow-2xl bg-gray-900 text-white cursor-pointer' type='submit' variant='ghost'>Create</Button>
        </form>
      </div>
    </div>
  )
}

export default AdminPage