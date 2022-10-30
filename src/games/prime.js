// determining if a variable is prime
export default (incomeNum) => {
  for (let i = 2; i < incomeNum; i += 1) {
    if (incomeNum % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
