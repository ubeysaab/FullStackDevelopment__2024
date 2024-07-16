module.exports = () => {
  const data = { products: [] };

  for (let i = 0; i < 10; i++) {
    data.products.push({ id: i, title: `product${i}` });
  }

  return data;
};