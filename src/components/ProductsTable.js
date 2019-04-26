import React from 'react';


const ProductsTable = (props) => {
  let style = {borderTop: '1px solid #ddd'}
  const produtos = [];
  props.produtos.forEach(produto => {
    let randomKey = Math.random().toString(36).substr(2, 9);
    let newData = {key: randomKey, produto: null, preco: null};
    produto.custom_data.forEach(custom => {
      if (custom.key === 'product_name') newData.produto = custom.value;
      else if (custom.key === 'product_price') newData.preco = custom.value;
    });
    produtos.push(newData)
  });

  return (
      <table style={{
        borderCollapse: 'collapse',
        width: '100%',
        marginTop: '30px',
        backgroundColor: '#fafafa',
        textAlign: 'center',
      }}>
        <tbody>
        <tr style={style}>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
        {
          produtos.map(produto => {
            return (
                <tr style={style} key={produto.key}>
                  <td>{produto.produto}</td>
                  <td>R$ {produto.preco.toFixed(2)}</td>
                </tr>
            );
          })
        }
        </tbody>
      </table>
  );
};

export default ProductsTable;