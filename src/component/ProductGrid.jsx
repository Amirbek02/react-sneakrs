const ProductGrid = () => {
  return (
    <div className="m-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-bold text-3xl">Все кроссовки</h1>
        <input type="text" placeholder="Поиск товара..." className="border rounded-lg p-2 w-60" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"></div>
    </div>
  );
};

export default ProductGrid;
