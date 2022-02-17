module.exports = async (req, res) => {
  try {
    console.log('product page');
    res.status(200).send('product page');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
