import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Tabs from "./components/Tabs";
import Post from "./components/Post";
import Product from "./components/Product";
import Tab from "./constants/tabs";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [activeTab, setActiveTab] = useState(Tab.Posts);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/content");

      if (!response.ok) {
        throw new Error("Network error. Please try again.");
      }
      const data = await response.json();
      console.log(data);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <h5 className="text-center mt-5">Loading...</h5>
      ) : (
        <div className="container mt-5">
          {data.banner && (
            <Banner title={data.banner.title} image={data.banner.image} />
          )}
          <Tabs activeTab={activeTab} onTabChange={handleTabChange} />

          {activeTab === Tab.Posts && data.posts && (
            <div className="row">
              {data.posts.map((post) => (
                <div key={post.id} className="col-md-4 d-flex mb-3">
                  <Post title={post.title} body={post.body} />
                </div>
              ))}
            </div>
          )}
          {activeTab === Tab.Products &&
            data.products &&
            data.products.map((product) => (
              <Product
                key={product.id}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default App;
