// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const user = {
    name: "John Doe",
  };
  res.status(200).json(user);
};
