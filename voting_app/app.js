class ProductList extends React.Component {
  render() {
    return(
      <div className='ui unstackable items'>
        Hello friend, Im a basic component
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
