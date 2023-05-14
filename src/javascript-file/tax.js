// if we want to typescript skip typechecking for js file we can use
////// @ts-nocheck
// or we can use JSDoc
/**
 * Calculate income Pajak
 * @param {number} income - Net salary after expense
 * @returns {number}
 */
export function calculatePajak(income) {
  return income * 0.3;
}
