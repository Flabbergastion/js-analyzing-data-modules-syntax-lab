


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};



require('datejs');


function combineUsers(...args) {
  const combinedObject = {
  users: [],
};
const mergeDate = Date.today().toString('M/d/yyyy');
  combinedObject.merge_date = mergeDate;
 for (const arg of args) { // Loop through each argument
    if (Array.isArray(arg)) { // Check if the argument is an array
      // Step 4: Merge Arrays using the spread operator
      combinedObject.users = [...combinedObject.users, ...arg];
    }
  }
  return combinedObject;


}
