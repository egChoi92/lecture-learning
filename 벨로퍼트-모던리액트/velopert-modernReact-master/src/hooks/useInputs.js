import { useReducer, useCallback } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_USER":
      return {
        ...state,
        [action.name]: action.value
      };
    case "RESET":
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = '';
        return acc;
      }, {});
    default:
      throw new Error("Unhandled Action");
      ;
  }
}
function useInputs(initialState) {
  const [form, dispatch] = useReducer(reducer, initialState);

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch({
      type: "CHANGE_USER",
      name,
      value
    })
  }, [])
  const reset = useCallback(() => {
    dispatch({
      type: "RESET"
    })
  }, [])

  return [form, onChange, reset];
} 
// function useInputs (initailForm) {
//   const [form, setForm] = useState(initailForm);

//   const onChange = useCallback(e => {
//     const {name, value} = e.target;
//     setForm(form => ({
//       ...form,
//       [name]: value
//     }))
//   }, [])

//   const reset = useCallback(() => {
//     setForm(initailForm)
//   }, [initailForm])

//   return [form, onChange, reset];
// }

export default useInputs;