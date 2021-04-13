/* eslint-disable import/prefer-default-export */
export const handleErrors = (error, res) => {
  const errors = error.details.map((err) => err.message);
  res.status(400).json({
    status: 400,
    error: errors,
  });
};
