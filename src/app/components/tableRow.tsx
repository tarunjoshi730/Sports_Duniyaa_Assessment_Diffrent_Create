import React from 'react';

interface TableRowProps {
  rank: string;
  collegeName: string;
  location: string;
  fees: string;
  averagePackage: string;
  highestPackage: string;
  userReviews: string;
  totalReviews: string;
  ranking: string;
  outOf: string;
  year: string;
  cutOff: string;
  isFeatured: boolean;
  sup : string
}

const TableRow: React.FC<TableRowProps> = (props) => {
  const { rank, collegeName, location, fees, averagePackage, highestPackage, userReviews, totalReviews, ranking, outOf, year, cutOff, isFeatured ,sup } = props;
  const tdClass = isFeatured ? 'bg-[#fff3ea]' : '';

  return (
    <tr className="border-b">
      <td className={`p-4 border-2 border-gray-300 ${tdClass}`}>#{rank}</td>
      <td className={`p-4 border-2 border-gray-300 relative ${tdClass}`}>
        {isFeatured && (
          <div>
            <img className='absolute -top-2 left-10' src="tag.png" width={100} alt="" />
            <span className='absolute -top-1.5 left-16 z-10 text-white text-xs font-semibold'>Featured</span>
          </div>
        )}
        <div>
          <div className='flex flex-row gap-3'>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" width={30} />
            </div>
            <div className='text-[#43c5e7] font-bold'>
              {collegeName}<br/><span className="text-xs text-gray-500">{location}</span>
              <div className='flex flex-row'>
                <div className='bg-[#fffae2] text-sm font-normal text-[#ff7100] border-l-2 border-[#ff7100] pl-3 py-2'>
                  B.Tech Computer Science Engineering <br /> <span className='text-black/90'>Jee-Advanced 2023 Cutoff : {cutOff}</span>
                </div>
                <div className=" border-t-[30px] border-l-[15px] border-b-[30px] border-solid border-t-transparent border-b-transparent border-l-[#fffae2]"></div>
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <span className='text-[#ff7100] font-semibold cursor-pointer'>{"->"} Apply Now</span>
            <span className='text-[#13ba95] font-semibold ml-16 cursor-pointer'> <span className='text-2xl mr-2'>⇲</span> Download Brochure</span>
            <span className='font-semibold ml-16'><input className='mr-2' type="checkbox"/>Add to Compare</span>
          </div>
        </div>
      </td>
      <td className={`p-4 border-2 border-gray-300 ${tdClass}`}>
        <span className='text-[#13ba95] font-bold text-lg'>₹{fees}</span>
        <span className='text-sm text-gray-500'><br />BE/B.Tech <br /> -1st Year Fees <br /></span>
        <span className='text-[#ff7100] font-semibold cursor-pointer'> <span className='font-bold text-xl'>⇄</span> Compare Fees</span>
      </td>
      <td className={`p-4 border-2 border-gray-300 ${tdClass}`}>
        <span className='text-[#13ba95] font-bold text-lg'>₹{averagePackage}</span><br />
        <span className="text-sm text-gray-500">Average Package</span> <br />
        <span className='text-[#13ba95] font-bold text-lg'>₹{highestPackage}</span><br />
        <span className="text-sm text-gray-500">Highest Package</span><br />
        <span className='text-[#ff7100] font-semibold cursor-pointer'> <span className='font-bold text-xl'>⇄</span> Compare Placement</span>
      </td>
      <td className={`p-4 border-2 border-gray-300 ${tdClass}`}>
        <span className='text-6xl text-[#ff7100]'>.</span>
        <span className='text-lg'>{userReviews}/10</span><br />
        <span className='text-sm text-gray-500'>Based on {totalReviews} User Reviews</span>
        <div className='text-sm text-[#d86e85] bg-[#fffae2] p-2 mt-3 rounded-xl'>
          ✓ Best in Social Life 
        </div>
      </td>
      <td className={`p-4 border-2 border-gray-300 text-lg ${tdClass}`}>
        #{ranking}<sup>{sup}</sup>/ <span className='text-[#ff7100] font-semibold'>{outOf}</span> in India <br />
        <div className='flex flex-row text-base gap-2 mt-2 '>
          <img src="https://seeklogo.com/images/I/india-today-logo-0218513CB5-seeklogo.com.png" width={50} alt="" /> 
          {year}
        </div>
        <div className='flex flex-row mt-3'>
          <div className='bg-[#e7faff] text-sm font-normal text-[#43c5e7] border-l-2 border-[#43c5e7] pl-3 py-2 flex flex-row'>
            <div className='relative flex -space-x-3'>
              <img src='https://www.indiantelevision.com/sites/default/files/images/tv-images/2015/01/02/dd%20logo%20final_Page_1.jpg' className='w-8 h-8 rounded-full border-2 border-white' />
              <img src='https://www.adgully.com/img/400/66628_zee-news-logo.jpg' className='w-8 h-8 rounded-full border-2 border-white' />
              <img src='https://5.imimg.com/data5/SELLER/Default/2021/5/MW/JM/PT/45921677/aajtak-news-channel-advertising-500x500.jpg' className='w-8 h-8 rounded-full border-2 border-white' />
            </div>
            <span className='ml-3 cursor-pointer'>+10 <br /> More</span>
          </div>
          <div className=" border-t-[20px] border-l-[15px] border-b-[30px] border-solid border-t-transparent border-b-transparent border-l-[#e7faff]"></div>
        </div>
        <br />
      </td>
    </tr>
  );
};

export default TableRow;
