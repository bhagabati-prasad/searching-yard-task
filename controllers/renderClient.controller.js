module.exports = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
};
