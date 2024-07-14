const GenderCheckbox = () => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className="{`label gap-2 cursor-pointer`}">
                <span className="label-text p-2">Male</span>
                <input type="checkbox" className="checkbox border-slate-900"></input>
            </label>
        </div>
        <div>
        <div className="form-control">
            <label className="{`label gap-2 cursor-pointer`}">
                <span className="label-text p-2">Female</span>
                <input type="checkbox" className="checkbox border-slate-900"></input>
            </label>
        </div>
        </div>
    </div>

    
  )
}

export default GenderCheckbox

// Starter code for this file
// const GenderCheckbox = () => {
//     return (
//       <div className="flex">
//           <div className="form-control">
//               <label className="{`label gap-2 cursor-pointer`}">
//                   <span className="label-text p-2">Male</span>
//                   <input type="checkbox" className="checkbox border-slate-900"></input>
//               </label>
//           </div>
//           <div>
//           <div className="form-control">
//               <label className="{`label gap-2 cursor-pointer`}">
//                   <span className="label-text p-2">Female</span>
//                   <input type="checkbox" className="checkbox border-slate-900"></input>
//               </label>
//           </div>
//           </div>
//       </div>
  
      
//     )
//   }
  
//   export default GenderCheckbox