// // Search.tsx
// import { useState } from "react";

// const Search = ({ onSearch }: { onSearch: (term: string) => void }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     onSearch(searchTerm);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleChange}
//         placeholder="Search..."
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default Search;
