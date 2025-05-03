import { ModeToggle } from "../ui/mode-toggle";


export default function Header() {

  return (
    <div className="w-full bg-white dark:bg-dark-card gap-x-3 p-2 px-3 flex items-center border my-2 shadow rounded-md">
      <ModeToggle />
    </div>
  )
}

// import React, { useState, useEffect } from 'react'

// const Challenge40 = () => {
//   const [breadcrumbs, setBreadcrumbs] = useState([]);

//   useEffect(() => {
//     //set breadcrumbs data here
//     const breadcrumbData = [
//       { label: 'Home', path: '/' },
//       { label: 'About', path: '/about' },
//       { label: 'Service', path: '/service' },
//       { label: 'Contact', path: '/contact' }
//     ];
//     setBreadcrumbs(breadcrumbData);
//   }, []);

//   return (
//     <section className='timeline-landing'>
//       <nav area-label='breadcrumb'>
//         <ol className='breadcrumb'>
//           {
//             breadcrumbs.map((breadcrumb, index) => (
//               <li key={index} className='breadcrumb-item'>
//                 {
//                   index === breadcrumbs.length - 1 ? (
//                     <span>
//                       {breadcrumb.label}
//                     </span>
//                   ) : (
//                     <a href={breadcrumb.path}>
//                       {breadcrumb.label}
//                     </a>
//                   )
//                 }
//               </li>
//             ))
//           }
//         </ol>
//       </nav>
//     </section>
//   )
// }

// export default Challenge40