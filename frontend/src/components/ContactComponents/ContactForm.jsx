// import { useActionState } from "react";

// export default function ContactForm() {
  
//     const [formState, formAction] = useActionState(contactFormAction, {errors : null})

//     function contactFormAction(prev, formData){

//     }

//     return (
//     <form action={formAction}>
//       <div className="control-row">
//         <p className="control">
//           <label htmlFor="userName">Your Name</label>
//           <input
//             type="text"
//             id="userName"
//             name="userName"
//             defaultValue={formState.enteredValues?.userName}
//           />
//         </p>

//         <p className="control">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             defaultValue={formState.enteredValues?.title}
//           />
//         </p>
//       </div>
//       <p className="control">
//         <label htmlFor="body">Your Opinion</label>
//         <textarea
//           id="body"
//           name="body"
//           rows={5}
//           defaultValue={formState.enteredValues?.body}
//         ></textarea>
//       </p>

//       {formState.errors && (
//         <ul className="errors">
//           {formState.errors.map((error, index) => {
//             return <li key={error}>{error}</li>;
//           })}
//         </ul>
//       )}

//       <Submit />
//     </form>
//   );
// }
