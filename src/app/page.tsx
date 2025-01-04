"use client"
import React, { useState, useEffect, useRef } from 'react';
import TableRow from './components/tableRow';
import collegeData from '../../public/college.json'

type College = {
  rank: string;
  collegeName: string;
  location: string;
  fees: string;
  averagePackage: string;
  highestPackage: string;
  userReviews: string;
  ranking: string;
  totalReviews: string;
  outOf: string;
  year: string;
  cutOff: string;
  isFeatured: boolean;
  sup :string;
};

const HomePage: React.FC = () => {
  const [displayData, setDisplayData] = useState<College[]>(collegeData.slice(0, 10));
  const [index, setIndex] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState<keyof College | null>(null);
  const [isAscending, setIsAscending] = useState(true);
  const tableRef = useRef<HTMLDivElement>(null);

  const loadMoreData = () => {
    const newData = collegeData.slice(index, index + 10);
    setDisplayData((prevData) => [...prevData, ...newData]);
    setIndex((prevIndex) => (prevIndex + 10) % collegeData.length);
  };

  const handleScroll = () => {
    if (tableRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = tableRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadMoreData();
      }
    }
  };

  useEffect(() => {
    const currentRef = tableRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [index]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredData = collegeData.filter((college) =>
      college.collegeName.toLowerCase().includes(term)
    );
    setDisplayData(filteredData.slice(0, 10));
    setIndex(10);
  };

  const handleSort = (criteria: keyof College) => {
    if (sortCriteria === criteria) {
      setIsAscending(!isAscending);
    } else {
      setSortCriteria(criteria);
      setIsAscending(true);
    }

    const sortedData = [...displayData].sort((a, b) => {
      if (isAscending) {
        return a[criteria] > b[criteria] ? 1 : -1;
      } else {
        return a[criteria] < b[criteria] ? 1 : -1;
      }
    });
    setDisplayData(sortedData);
  };

  return (
    <div className="p-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by college name"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={() => handleSort('ranking')}
          className={`ml-2 p-2 border border-gray-300 rounded ${
            sortCriteria === 'ranking' ? 'bg-[#7bbfc7] text-white' : 'bg-white text-black'
          }`}
        >
          Sort by Ranking
        </button>
        <button
          onClick={() => handleSort('fees')}
          className={`ml-2 p-2 border border-gray-300 rounded ${
            sortCriteria === 'fees' ? 'bg-[#7bbfc7] text-white' : 'bg-white text-black'
          }`}
        >
          Sort by Fees
        </button>
        <button
          onClick={() => handleSort('userReviews')}
          className={`ml-2 p-2 border border-gray-300 rounded ${
            sortCriteria === 'userReviews' ? 'bg-[#7bbfc7] text-white' : 'bg-white text-black'
          }`}
        >
          Sort by User Reviews
        </button>
        <button
          onClick={() => handleSort(sortCriteria!)}
          className="ml-2 p-2 border border-gray-300 rounded"
        >
          {isAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <div className="overflow-auto max-h-[90vh] no-scrollbar" ref={tableRef}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#7bbfc7] sticky top-0 z-10 text-white">
            <tr>
              <th className="p-4 text-left">CD Rank</th>
              <th className="p-4 text-left">Colleges</th>
              <th className="p-4 text-left">Course Fees</th>
              <th className="p-4 text-left">Placement</th>
              <th className="p-4 text-left">User Reviews</th>
              <th className="p-4 text-left">Ranking</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayData.map((college, index) => (
              <TableRow
                key={index}
                rank={college.rank}
                collegeName={college.collegeName}
                location={college.location}
                fees={college.fees}
                averagePackage={college.averagePackage}
                highestPackage={college.highestPackage}
                userReviews={college.userReviews}
                totalReviews={college.totalReviews}
                ranking={college.ranking}
                outOf={college.outOf}
                year={college.year}
                cutOff={college.cutOff}
                isFeatured={college.isFeatured}
                sup={college.sup}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
