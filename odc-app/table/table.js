import React from 'react';

const Header = ({ keys }) => (
 <thead>
 <tr>
   {
     keys.map(k => <th key={k}>{k}</th>)
   }
 </tr>
 </thead>
);

const Body = ({ keys, data }) => (
 <tbody>
 {
   data.map(row => (
    <tr key={row.id}>
      {
        keys.map((key, keyIndex) => {
          if (key === "coordinate") {
            return (
             <td key={key+keyIndex}>
               { row[key].type }: ({ row[key].x } / { row[key].y })
             </td>
            );
          }
          return (
           <td key={key+keyIndex}>
             { row[key] }
           </td>
          )
        })
      }
    </tr>
   ))
 }
 </tbody>
);

const Table = ({ data, loading }) => {
  if (loading) return <em>Loading...</em>;
  if (data.length === 0) return <em>No data found</em>;
  const keys = Object.keys(data[0]).filter(k => k.substring(0, 2) !== "__"); // Remove all the GraphQL properties
  // like __Typename
  return (
   <table>
     <Header keys={keys}/>
     <Body data={data} keys={keys} />
   </table>
  );
};

export default Table;