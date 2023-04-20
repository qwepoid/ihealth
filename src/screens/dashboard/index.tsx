import Search from "ihealth/components/Search";
import PharmacyCard from "./components/PharmacyCard";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const resJson = await res.json();
      console.log(resJson);
      setProductsList(resJson.products);
    }
    fetchProducts();
  }, []);

  return (
    <div className="h-screen my-8 mx-4">
      <div className="w-full flex justify-center mb-8">
        <Search />
      </div>
      <div className="flex flex-col space-y-6">
        {productsList?.map(({ title, price, description, id, images }) => (
          <PharmacyCard
            title={title}
            address={description}
            distance={price}
            status={id}
            prodImage={images[0] ?? ""}
          />
        ))}
        {/* <PharmacyCard />
        <PharmacyCard /> */}
      </div>
    </div>
  );
};

export default Dashboard;
